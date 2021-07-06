import axiosClient from './client'

let endpoint = '/case/lost/'

const getAllCases = async id => {
  endpoint = endpoint + id
  return axiosClient.get(endpoint)
}

const getOneCase = async (userId, caseId) => {
  endpoint = endpoint + userId + '/' + caseId
  return axiosClient.get(endpoint)
}

/*const uploadImage = async (image) => {
    return axiosClient.post('/images/upload/', image)
}*/

const uploadCase = async info => {
  return axiosClient.post('/case/lost', info)
}

const editCase = async info => {
  return axiosClient.put('/case/lost', info)
}

const deleteCase = async id => {
  return axiosClient.delete('/case/lost', {
    data: id,
  })
}

export default {
  getAllCases,
  getOneCase,
  // uploadImage,
  uploadCase,
  editCase,
  deleteCase,
}
