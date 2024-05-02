import {axiosClient} from "./axios.js";

const LoginApi = {
    getCsrfToken: async  () => {
        return await axiosClient.get("/sanctum/csrf-cookie")
    },
    login: async (email,password) => {
        return await axiosClient.post("/api/login",{email,password});
    },
    logout: async () => {
        return await axiosClient.post("/api/logout");
    },
    getUser: async () => {
        return await axiosClient.get("/api/user");
    }
}
export default LoginApi;