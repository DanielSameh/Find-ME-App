import React from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../styles/colors'
const Container = ({ children }) => {
  return (

    <ContainerView>{children}</ContainerView>

  )
}

const ContainerView = styled(SafeAreaView)`
    align-items:center;
    width: 100%;
    height: 100%;
    background: ${colors.backColor}; 
    

`

export default Container
