import { WeatherCondition } from "../types";

export const mapWeatherCodeToLabel = (weatherCode: number): WeatherCondition => {
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