"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { fetchWeather } from "@/utils/fetchWeather";
import { Weather } from "@/types/WeatherTypes";
import { fetchCity } from "@/utils/fetchCity";
import { City } from "@/types/CityTypes";

interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  cityData: City | null;
  weatherData: Weather | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [city, setCity] = useState<string>("");
  const [cityData, setCityData] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  useEffect(() => {
    if (city) {
      const getWeather = async () => {
        try {
          const cityData = await fetchCity(city);
          setCityData(cityData);
          const weatherData = await fetchWeather(
            cityData.latitude,
            cityData.longitude
          );
          setWeatherData(weatherData);
        } catch (err) {
          console.error(`Failed to fetch data: ${err}`);
        }
      };

      getWeather();
    }
  }, [city]);

  return (
    <WeatherContext.Provider
      value={useMemo(
        () => ({ city, setCity, cityData, weatherData }),
        [city, setCity, cityData, weatherData]
      )}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within WeatherProvider");
  }
  return context;
};
