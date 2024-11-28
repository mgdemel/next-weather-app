import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Snowflake,
  Sun,
} from "lucide-react";

const WeatherCodes = [
  {
    description: "Clear sky",
    codes: [0],
    icon: (
      <Sun
        className={`h-8 w-8 sm:h-10 sm:w-10 text-yellow-500`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Mainly clear, partly cloudy, and overcast",
    codes: [1, 2, 3],
    icon: (
      <Cloud
        className={`h-8 w-8 sm:h-10 sm:w-10 text-gray-600`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Fog and depositing rime fog",
    codes: [45, 48],
    icon: (
      <CloudFog
        className={`h-8 w-8 sm:h-10 sm:w-10 text-gray-500`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Drizzle",
    codes: [51, 53, 55],
    icon: (
      <CloudDrizzle
        className={`h-8 w-8 sm:h-10 sm:w-10 text-blue-600`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Freezing Drizzle",
    codes: [56, 57],
    icon: (
      <Snowflake
        className={`h-8 w-8 sm:h-10 sm:w-10 text-blue-400`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Rain",
    codes: [61, 63, 65],
    icon: (
      <CloudRain
        className={`h-8 w-8 sm:h-10 sm:w-10 text-blue-700`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Freezing Rain",
    codes: [66, 67],
    icon: (
      <CloudSnow
        className={`h-8 w-8 sm:h-10 sm:w-10 text-blue-500`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Snow fall",
    codes: [71, 73, 75, 77],
    icon: (
      <CloudSnow
        className={`h-8 w-8 sm:h-10 sm:w-10 text-blue-400`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Rain showers",
    codes: [80, 81, 82],
  },
  {
    description: "Snow showers",
    codes: [85, 86],
    icon: (
      <CloudSnow
        className={`h-8 w-8 sm:h-10 sm:w-10 text-blue-400`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Thunderstorm",
    codes: [95],
    icon: (
      <CloudLightning
        className={`h-8 w-8 sm:h-10 sm:w-10 text-yellow-600`}
        aria-hidden="true"
      />
    ),
  },
  {
    description: "Thunderstorm with hail",
    codes: [96, 99],
    Icon: (
      <CloudLightning
        className={`h-8 w-8 sm:h-10 sm:w-10 text-yellow-600`}
        aria-hidden="true"
      />
    ),
  },
];

export const getWeatherCondition = (weatherCode: number): string => {
  const weatherType = WeatherCodes.find((type) =>
    type.codes.includes(weatherCode)
  );
  return weatherType?.description ?? "Unknown";
};

export const getWeatherIcon = (
  weatherCode: number
): React.JSX.Element | undefined => {
  const weatherType = WeatherCodes.find((type) =>
    type.codes.includes(weatherCode)
  );
  return weatherType?.icon;
};
