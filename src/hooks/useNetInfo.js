import { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

const useNetInfo = () => {
  const [netInfo, setNetInfo] = useState()

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setNetInfo(state)
    })
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return netInfo
}
export default useNetInfo
