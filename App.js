import React from 'react'

import MainNavigation from './src/navigation/MainNavigation'
global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest
global.FormData = global.originalFormData || global.FormData

if (window.FETCH_SUPPORT) {
  window.FETCH_SUPPORT.blob = false
} else {
  global.Blob = global.originalBlob || global.Blob
  global.FileReader = global.originalFileReader || global.FileReader
}
const App = () => {
  return <MainNavigation />
}

export default App
