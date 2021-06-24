import React from 'react'
import styled from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../styles/colors'
const Container = ({ children, bc }) => {
  return (

    <ContainerView bc={bc}>{children}</ContainerView>

  )
}

const ContainerView = styled(SafeAreaView)`
    align-items:center;
    width: 100%;
    height: 100%;
    background: ${colors.white}; 
    

`

export default Container
