import * as ImagePicker from 'expo-image-picker'
import * as Camera from 'expo-camera'

const useImage = () => {
  const selectImageFromGallery = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.cancelled) {
        return result.uri
      } else {
        return null
      }
    } catch (error) {
      return null
    }
  }
  const selectImageFromCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.cancelled) {
        return result.uri
      } else return null
    } catch (error) {
      console.log('error', error)
      return null
    }
  }

  const requestPermission = async () => {
    const result = await Camera.requestPermissionsAsync()
    if (!result.granted) {
      alert('You need to enable permission to access the image ')
    }
  }

  return { selectImageFromCamera, selectImageFromGallery, requestPermission }
}

export default useImage
