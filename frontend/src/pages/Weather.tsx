import { useEffect, useState } from "react";

const getWeather = () =>
    fetch("http://localhost:8080/api/weather").then((res) => res.json());

const Weather = () => {
    const [raining, setRaining] = useState(null);

    useEffect(() => {
        getWeather().then((data) => setRaining(data));
    }, []);

    return (
        <div>
            <h1>Is it raining in New York?</h1>
            <p>{raining === null ? "Loading..." : raining ? "Yes" : "No"}</p>
        </div>
    );
};

export default Weather;
