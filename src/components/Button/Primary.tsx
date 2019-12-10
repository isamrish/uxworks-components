import React from "react"
import styled, { css } from "styled-components"
import { ButtonProps } from './base'

const StyledPrimaryButton = styled.button`
  border: 1px solid #002de3;
  color: #ffffff;
  border-radius: 5px;
  background-color: #002de3;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;
  ${props => props.size === 'large' && css`
    font-size: 20px;
    padding: 10px 20px;
  `}
  ${props => props.size === 'small' && css`
    font-size: 14px;
    padding: 3px 5px;
  `}

  &:hover {
    background-color: #0231ed;
    border: 1px solid #0231ed;
  }

  &:active {
    background-color: #002de3;
    border: 1px solid #0231ed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #5a74db, 0 0 0 3px #7088e6;
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`

export const PrimaryButton = (props: ButtonProps) => {
  return (
    <StyledPrimaryButton {...props} type="button">
      {props.children}
    </StyledPrimaryButton>
  )
}
