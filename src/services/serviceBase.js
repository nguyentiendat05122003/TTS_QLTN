import axios from "axios";

export const axiosClient = axios.create({
    baseURL: 'http://localhost:44360/api/'
});

export const axiosQLTN = axios.create({
    baseURL: 'http://localhost:44469/APIPCHY/'
});


