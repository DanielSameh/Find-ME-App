import axiosClient from './client'

const signUp = (data) => {
  return axiosClient.post('/auth/register', JSON.stringify(data))
}

const signIn = (data) => {
  return axiosClient.post('/auth/login', JSON.stringify(data))
}

export default { signUp, signIn }