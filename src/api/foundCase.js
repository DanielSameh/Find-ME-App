import axiosClient from './client'

const uploadFoundCase = (info, imagesId) => {
  return axiosClient
    .post('/case/found', info, { headers: { imagesid: imagesId } })
    .catch(error => console.log(error))
}

const uploadFoundImage = async (image, imagesId) => {
  return axiosClient
    .post('/images/upload/found', image, {
      headers: { 'Content-Type': 'multipart/form-data', imagesid: imagesId },
    })
    .catch(error => console.log(error))
}

export default {
  uploadFoundCase,
  uploadFoundImage,
}
