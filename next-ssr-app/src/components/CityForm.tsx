"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { useWeather } from "@/contexts/WeatherContext";
import { useEffect } from "react";
import { Button } from "./ui/button";

const formSchema = z.object({
  city: z.string(),
});

export const CityForm = () => {
  const { setCity, cityData, weatherData } = useWeather();

  useEffect(() => {
    if (cityData && weatherData) {
      console.log(cityData);
      console.log(weatherData);
    }
  }, [cityData, weatherData]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      city: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setCity(values.city);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Add a city name here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
