import path from "path";
import express, { Express } from "express";
import cors from "cors";
import { WeatherResponse } from "@full-stack/types";
import fetch from "node-fetch";
import { db } from "./firebase";

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());

type WeatherData = {
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    current: {
        time: string;
        interval: number;
        precipitation: number;
    };
};

app.get("/weather", async (req, res) => {
    console.log("GET /api/weather was called");
    try {
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=40.7411&longitude=73.9897&current=precipitation&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America%2FNew_York&forecast_days=1"
        );
        const data = (await response.json()) as WeatherData;
        const output: WeatherResponse = {
            raining: data.current.precipitation > 0.5,
        };
        res.json(output);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Just an example endpoint to showcase how to use the Firestore database
app.get("/get-all-users", async (req, res) => {
    console.log("GET /api/get-everything was called");
    const usersCollection = db.collection("Users"); // Assuming you have a collection called "Users"
    const doc = await usersCollection.get();

    const allUsers: Record<string, any> = {};
    doc.forEach((d) => {
        console.log("d: ", d.id, d.data());
        allUsers[d.id] = d.data();
    });

    res.json(allUsers);
});

app.listen(port, hostname, () => {
    console.log("Listening");
});
