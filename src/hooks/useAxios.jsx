import axios from 'axios';

const useAxios = axios.create({
    baseURL: "https://school-of-rock-server.vercel.app",
})

export default useAxios;