import { useEffect, useState } from "react";
import { WeatherResponse } from "@fly-chick/types";
import { BASE_URL_BACKEND } from "@fly-chick/common";

const getWeather = (): Promise<WeatherResponse> =>
    fetch(`${BASE_URL_BACKEND}/api/weather`).then((res) => res.json());

const Weather = () => {
    const [{ raining }, setRaining] = useState<WeatherResponse>({
        raining: true,
    });

    useEffect(() => {
        console.log("Loading weather...");
        getWeather().then((data) => setRaining(data));
    }, []);

    return (
        <div>
            <h1>Is it raining in New York?</h1>
            <p>{raining ? "Yes" : "No"}</p>
        </div>
    );
};

export default Weather;
