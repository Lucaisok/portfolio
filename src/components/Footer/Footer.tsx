"use client";

import { useEffect, useState } from 'react';
import { siteContent } from '@/src/content/global';
import styles from './Footer.module.css';

const BERLIN_WEATHER_URL =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code&timezone=auto';
const BERLIN_FORECAST_URL = 'https://www.timeanddate.com/weather/germany/berlin/ext';

const mapWeatherCodeToLabel = (weatherCode: number): 'sunny' | 'cloudy' | 'rainy' | 'snowy' => {
    if (weatherCode === 0) {
        return 'sunny';
    }

    if (
        weatherCode === 71 ||
        weatherCode === 73 ||
        weatherCode === 75 ||
        weatherCode === 77 ||
        weatherCode === 85 ||
        weatherCode === 86
    ) {
        return 'snowy';
    }

    if (
        (weatherCode >= 51 && weatherCode <= 67) ||
        (weatherCode >= 80 && weatherCode <= 82) ||
        weatherCode >= 95
    ) {
        return 'rainy';
    }

    return 'cloudy';
};

export const Footer = () => {
    const content = siteContent;

    const [berlinWeather, setBerlinWeather] = useState<'sunny' | 'cloudy' | 'rainy' | 'snowy'>('cloudy');

    useEffect(() => {
        const updateBerlinWeather = async () => {
            try {
                const response = await fetch(BERLIN_WEATHER_URL, { cache: 'no-store' });

                if (!response.ok) {
                    return;
                }

                const data: {
                    current?: {
                        weather_code?: number;
                    };
                } = await response.json();

                const weatherCode = data.current?.weather_code;

                if (typeof weatherCode === 'number') {
                    setBerlinWeather(mapWeatherCodeToLabel(weatherCode));
                }
            } catch {
                // Keep fallback value when weather API is unavailable.
            }
        };

        void updateBerlinWeather();
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copy}>
                    © 2026 {content.name}. Developed with ❤️ in{' '}
                    <a href={BERLIN_FORECAST_URL} target="_blank" rel="noreferrer" className={styles.link}>
                        {berlinWeather}
                    </a>{' '}
                    Berlin
                </p>
            </div>
        </footer>
    );
};
