import axios from "axios";
import { weatherAccessKey } from "./config.js";

const weatherInstance = axios.create({
    baseURL: "https://api.weatherstack.com",
    params: {
        access_key: weatherAccessKey,
    }
});

export const getCurrentWeatherByCity = async city => {
    const { data } = await weatherInstance.get("/current", {
        params: {
            query: city
        }
    });
    return data;
}