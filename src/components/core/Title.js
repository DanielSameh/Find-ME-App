import React from 'react'
import styled from 'styled-components'

const Title = ({ fontSize, fontWeight, fontColor, children }) => {
    return (
        <HeaderOne FC={fontColor} FW={fontWeight} FS={fontSize}>
            {children}
        </HeaderOne>
    )
}

const HeaderOne = styled.Text`
   
    font-size: ${props => props.FS || '15px'};
    font-weight: ${props => props.FW || 'normal'};
    color: ${props => props.FC || '#2E3E5C'};
    margin-bottom: 8px;
    margin-top: 8px;
    text-align: center;
    `
export default Title