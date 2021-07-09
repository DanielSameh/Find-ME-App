import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'

const Input = ({
  inputPlaceHolder,
  isDescription,
  Password,
  children,
  Width,
  Height,
  isSearch,
  term,
  onTermChange,
  onTermSubmit,
  keyboardType = 'default',
  isDisable
}) => {
  return (
    <InputView WD={Width} HG={Height} isSearch={isSearch} isDescription={isDescription}>
      {children}
      <InputField
        editable={isDisable ? false : true}
        HG={Height}
        multiline={isDescription}
        isDescription={isDescription}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder={inputPlaceHolder}
        secureTextEntry={Password}
        keyboardType={keyboardType}
      />
    </InputView>
  )
}

const InputView = styled.View`
font-size: 15px;
background-color: ${props => (props.isSearch ? '#F4F5F7' : 'white')};
width: ${props => props.WD || '90%'};
height :${props => props.HG || '60px'};
align-items: ${props => (props.isDescription ? 'flex-end' : 'flex-start')};
margin-bottom: 16px;
padding: 19px;
border: ${props => (props.isSearch ? '0px' : '1px solid #D0DBEA')};
flex-direction : row;
border-radius: 32px;
color: #9FA5C0;
`
const InputField = styled(TextInput)`
font-size: 15px;
width: 290px;
height :${props => (props.isDescription ? '120px' : '20px')};
margin-bottom: ${props => (props.isDescription ? '0px' : '16px')};
color: #2E3E5C;

`
export default Input
