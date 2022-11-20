import axios from "axios";


export const axiosInstance = axios.create({
    baaseURL : "https://jab.herokuapp.com/api/"
})