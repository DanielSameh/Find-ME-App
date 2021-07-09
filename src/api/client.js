import axios from 'axios'
import authStorage from '../auth/storage'

const axiosClient = axios.create({
  baseURL: 'http://find-missing.me/api',
})

axiosClient.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

axiosClient.interceptors.request.use(
  async config => {
    const token = await authStorage.getToken()
    config.headers = {
      Authorization: token ? `Bearer ${token}` : null,
      Accept: '*/*',
      'Content-Type': 'application/json',
    }
    return config
  },

  error => {
    Promise.reject(error)
  },
)

export default axiosClient
