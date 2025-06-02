import axios from "axios";

const weatherInstance = axios.create({
    baseURL: "https://api.weatherstack.com",
    params: {
        access_key: "a80cd882dc86a1b4350ad6d26aec07f4",
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