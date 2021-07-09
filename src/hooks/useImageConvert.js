import casesApi from '../api/cases'

const useImageConvert = imageUris => {
  const getImageUri = async image => {
    const formData = new FormData()
    let localUri = image
    let filename = localUri.split('/').pop()
    let match = /\.(\w+)$/.exec(filename)
    let type = match ? `image/${match[1]}` : 'image'

    formData.append('images', { uri: localUri, name: filename, type })

    const res = await casesApi.uploadImage(formData)

    return res.data.images[0]
  }

  const getImagesUri = async () => {
    var promises = imageUris.map(async x => {
      const image = await getImageUri(x)
      return image
    })

    const images = await Promise.all(promises)
    console.log(images)
    return images
  }

  return { getImagesUri }
}

export default useImageConvert
