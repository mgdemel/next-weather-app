export interface DailyWeather {
  date: string;
  weatherCode: number;
  temperature2mMax: number;
  temperature2mMin: number;
  sunrise: string;
  sunset: string;
  daylightDuration: number;
  uvIndexMax: number;
  precipitationProbabilityMax: number;
}

export type Weather = DailyWeather[];

export interface WeatherAPIPayload {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
  daylight_duration: number[];
  uv_index_max: number[];
  precipitation_probability_max: number[];
}
