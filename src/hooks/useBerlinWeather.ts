"use client";
import { useEffect, useState } from "react";
import { mapWeatherCodeToLabel } from "@/src/lib/utils";
import type { WeatherCondition } from "@/src/types";

export const BERLIN_FORECAST_URL = 'https://www.timeanddate.com/weather/germany/berlin/ext';
const BERLIN_WEATHER_URL =
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code&timezone=auto";

export const useBerlinWeather = (): WeatherCondition => {
    const [berlinWeather, setBerlinWeather] = useState<WeatherCondition>("cloudy");

    useEffect(() => {
        const updateBerlinWeather = async () => {
            try {
                const response = await fetch(BERLIN_WEATHER_URL, { cache: "no-store" });

                if (!response.ok) {
                    return;
                }

                const data: {
                    current?: {
                        weather_code?: number;
                    };
                } = await response.json();

                const weatherCode = data.current?.weather_code;

                if (typeof weatherCode === "number") {
                    setBerlinWeather(mapWeatherCodeToLabel(weatherCode));
                }
            } catch {
                // Keep fallback value when weather API is unavailable.
            }
        };

        // Intentionally fire-and-forget inside useEffect; we do not await here.
        void updateBerlinWeather();
    }, []);

    return berlinWeather;
};
