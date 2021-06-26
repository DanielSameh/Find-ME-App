import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://find-missing.me/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let res = error.response;
        console.error(`Looks like there was a problem. Status Code: ` + res.status);
        return Promise.reject(error);
    }
);

export default axiosClient