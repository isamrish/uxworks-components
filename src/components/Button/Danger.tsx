import React from "react"
import { ButtonProps } from './base'
import styled, { css } from "styled-components"
const DangerStyledButton = styled.button`
  border: 1px solid #FF3333;
  color: #ffffff;
  border-radius: 5px;
  background-color: #FF3333;
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
    background-color: #E52D2D;
    border: 1px solid #E52D2D;
  }

  &:active {
    background-color: #FF3333;
    border: 1px solid #E52D2D;
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

export const DangerButton = (props: ButtonProps) => {
  return (
    <DangerStyledButton {...props} type="button">
      {props.children}
    </DangerStyledButton>
  )
}
