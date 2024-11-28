import "@/styles/globals.css";
import { WeatherProvider } from "@/contexts/WeatherContext";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <WeatherProvider>
      <html lang="en">
        <body>{children} </body>
      </html>
    </WeatherProvider>
  );
}
