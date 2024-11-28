import { CityForm } from "@/components/CityForm";

export default function WeatherPage() {
  return (
    <div className="px-4 py-10 h-screen w-screen space-y-2">
      <h1>Find out the weather!</h1>
      <CityForm />
    </div>
  );
}
