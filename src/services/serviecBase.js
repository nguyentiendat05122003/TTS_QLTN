import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:44360/api/'
});


export default axiosClient