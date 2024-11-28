"use client";

import { useWeather } from "@/contexts/WeatherContext";
import { useEffect } from "react";

export default function WeatherPage() {
  const { city, setCity, cityData, weatherData } = useWeather();

  useEffect(() => {
    if (cityData && weatherData) {
      console.log(cityData);
      console.log(weatherData);
    }
  }, [cityData, weatherData]);

  const handleCityChange = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.city.value;
    setCity(input);
  };

  return (
    <div className="px-4 py-10 h-screen w-screen">
      <h1>What&apos;s the weather like?</h1>
      <form onSubmit={handleCityChange} className="flex py-4 space-x-4">
        <input
          type="text"
          name="city"
          placeholder="Enter city name"
          defaultValue={city}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
