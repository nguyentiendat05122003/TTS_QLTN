import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:5103/api/'
});

export const axiosQLTN = axios.create({
    baseURL: 'http://localhost:44469/APIPCHY/'
});


