import * as SecureStore from 'expo-secure-store'
import jwt_decode from 'jwt-decode'

const key = 'authToken'

const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken)
  } catch (error) {
    console.log(error)
  }
}

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key)
  } catch (error) {
    console.log(error)
  }
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key)
  } catch (error) {
    console.log(error)
  }
}

const getUser = async () => {
  const token = await getToken()
  return token ? jwt_decode(token) : null
}

export default {
  storeToken,
  getUser,
  getToken,
  removeToken,
}
