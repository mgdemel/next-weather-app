export async function fetchCity(city: string) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?count=1&language=en&format=json&name=${city}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch city data");
  }
  const data = await response.json();
  const cityData = data.results[0];
  const { latitude, longitude, country } = cityData;
  return { city, latitude, longitude, country };
}
