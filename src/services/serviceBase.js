import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:5103/api/'
});


export default axiosClient