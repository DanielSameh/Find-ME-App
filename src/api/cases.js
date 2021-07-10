import axiosClient from './client'

const getAllCases = async id => {
  const endpoint = '/case/lost/' + id

  return axiosClient.get(endpoint).catch(error => console.log(error))
}

const getOneCase = async (userId, caseId) => {
  const endpoint = '/case/lost/' + userId + '/' + caseId
  return axiosClient.get(endpoint).catch(error => console.log(error))
}

const uploadImage = async image => {
  return axiosClient
    .post('/images/upload/lost', image, { headers: { 'Content-Type': 'multipart/form-data' } })
    .catch(error => console.log(error))
}

const uploadCase = async info => {
  return axiosClient.post('/case/lost', info)
}

const editCase = async info => {
  return axiosClient.put('/case/lost', info)
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
