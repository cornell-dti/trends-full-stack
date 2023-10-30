import { useEffect, useState } from "react";
import { WeatherResponse } from "@full-stack/types";
import { BASE_URL_BACKEND } from "@full-stack/common";

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
