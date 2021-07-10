import { useEffect } from 'react'

import * as Location from 'expo-location'

const useLocation = () => {
  /* useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
    })()
  }, [])*/

  const getCity = async (lat, long) => {
    const result = await Location.reverseGeocodeAsync({ latitude: lat, longitude: long })
    return result
  }

  return { getCity }
}

export default useLocation
