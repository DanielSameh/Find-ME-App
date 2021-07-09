import axiosClient from './client'

let endpoint = '/case/lost/'

const getAllCases = async id => {
  endpoint = endpoint + id
  return axiosClient.get(endpoint).catch(error => console.log(error))
}

const getOneCase = async (userId, caseId) => {
  endpoint = endpoint + userId + '/' + caseId
  return axiosClient.get(endpoint).catch(error => console.log(error))
}

const uploadImage = async image => {
  return axiosClient
    .post('/images/upload', image, { headers: { 'Content-Type': 'multipart/form-data' } })
    .catch(error => console.log(error))
}

const uploadCase = async info => {
  return axiosClient.post('/case/lost', info).catch(error => console.log(error))
}

const editCase = async info => {
  return axiosClient.put('/case/lost', info).catch(error => console.log(error))
}

const deleteCase = async id => {
  return axiosClient
    .delete('/case/lost', {
      data: id,
    })
    .catch(error => console.log(error))
}

export default {
  getAllCases,
  getOneCase,
  uploadImage,
  uploadCase,
  editCase,
  deleteCase,
}
