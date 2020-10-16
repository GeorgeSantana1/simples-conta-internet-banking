import React, { useRef, useEffect } from 'react'

import {
  Container,
  InputContainer,
  ErrorContainer,
  ErrorIcon
} from './styles'

interface Props {
  name: string,
  label: string,
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <label>{label}</label>
      <InputContainer>
        <input ref={inputRef} {...rest} />
        <ErrorContainer>
          <div className="error-container">
            <p>Erro neste campo</p>
          </div>
          <ErrorIcon />
        </ErrorContainer>
      </InputContainer>
    </Container>
  )
}

export default Input
