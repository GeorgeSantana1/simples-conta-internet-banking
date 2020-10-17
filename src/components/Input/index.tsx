import React, { useRef } from 'react'

import {
  Container,
  InputContainer,
  ErrorContainer,
  ErrorIcon
} from './styles'

interface Props {
  name: string,
  label: string,
  error?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ name, label, error, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <label>{label}</label>
      <InputContainer error={error ? true : false}>
        <input ref={inputRef} {...rest} />
        {error && (
          <ErrorContainer>
            <div className="error-container">
              <p>{error}</p>
            </div>
            <ErrorIcon />
          </ErrorContainer>
        )}
      </InputContainer>
    </Container>
  )
}

export default Input
