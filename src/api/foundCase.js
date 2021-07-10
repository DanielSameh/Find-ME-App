import axiosClient from './client'

const uploadFoundCase = info => {
  return axiosClient.post('/case/found', info).catch(error => console.log(error))
}

const uploadFoundImage = async image => {
  return axiosClient
    .post('/images/upload/found', image, { headers: { 'Content-Type': 'multipart/form-data' } })
    .catch(error => console.log(error))
}

export default {
  uploadFoundCase,
  uploadFoundImage,
}
