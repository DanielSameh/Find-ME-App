import casesApi from '../api/cases'
import foundCaseApi from '../api/foundCase'

const useImageConvert = imageUris => {
  const getFormData = image => {
    const formData = new FormData()
    let localUri = image
    let filename = localUri.split('/').pop()
    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : 'image'

    formData.append('images', { uri: localUri, name: filename, type })
    return formData
  }

  const getImageUri = async (image, imagesId) => {
    if (image.includes('http')) {
      return image
    } else {
      const formData = getFormData(image)
      const res = await casesApi.uploadImage(formData, imagesId)
      return res.data.images[0]
    }
  }

  const getImagesUri = async imagesId => {
    var promises = imageUris.map(async x => {
      const image = await getImageUri(x, imagesId)
      return image
    })

    const images = await Promise.all(promises)
    console.log(images)
    return images
  }

  const getFoundImageUri = async image => {
    if (image.includes('http')) {
      return image
    } else {
      const formData = getFormData(image)
      const res = await foundCaseApi.uploadFoundImage(formData)
      return res.data.images[0]
    }
  }

  const getFoundImagesUri = async () => {
    var promises = imageUris.map(async x => {
      const image = await getFoundImageUri(x)
      return image
    })

    const images = await Promise.all(promises)
    return images
  }

  return { getImagesUri, getFoundImagesUri }
}

export default useImageConvert
