import { Weather, WeatherAPIPayload } from "@/types/WeatherTypes";

export async function fetchWeather(latitude: number, longitude: number) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,uv_index_max,precipitation_probability_max&timezone=Europe%2FBerlin`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  const data = await response.json();
  return parseWeatherData(data.daily);
}

function parseWeatherData(data: WeatherAPIPayload): Weather {
  return data.time.map((date: string, index: number) => ({
    date,
    weatherCode: data.weather_code[index],
    temperature2mMax: data.temperature_2m_max[index],
    temperature2mMin: data.temperature_2m_min[index],
    sunrise: data.sunrise[index],
    sunset: data.sunset[index],
    daylightDuration: data.daylight_duration[index],
    uvIndexMax: data.uv_index_max[index],
    precipitationProbabilityMax: data.precipitation_probability_max[index],
  }));
}
