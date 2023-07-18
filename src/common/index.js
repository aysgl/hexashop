import axios from "axios";

let urlConfig = "https://dummyjson.com"

const instance = axios.create({
    baseURL: urlConfig,
    headers: {
        "Content-Type": "application/json",
    },
});

const API = instance;

export default API;