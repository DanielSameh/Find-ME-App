import axios from 'axios'
import authStorage from '../auth/storage'

const axiosClient = axios.create({
    baseURL: 'http://find-missing.me/api',

})

axiosClient.interceptors.request.use(
    async config => {
        const token = await authStorage.getToken()
        config.headers = {
            'Authorization': token ? `Bearer ${token}` : null,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
);



/*axiosClient.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        let res = error.response;
        console.error('Looks like there was a problem. Status Code: ' + res.status)
        return Promise.reject(error)
    }
)*/

export default axiosClient