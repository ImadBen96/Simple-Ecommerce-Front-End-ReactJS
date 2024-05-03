import axios from "axios";
const axiosClient = axios.create({
    baseURL:  "https://simpleecommercestripe.imadgannoun.com",
    timeout:60000,
    withCredentials: true,
    xsrfCookieName: "XSRF-TOKEN",
    withXSRFToken:true,
    xsrfHeaderName: "X-XSRF-TOKEN",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    },

});
axiosClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = "Bearer "+token
    }

    return config;
});


export {axiosClient};
// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;
