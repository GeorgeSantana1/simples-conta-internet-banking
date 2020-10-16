import React from 'react'

import {
  Container,
  AppTitle,
  SignInButton,
  SignInIcon,
  RegisterButton,
  RegisterIcon,
} from './styles'

const LandingPage: React.FC = () => {
  return (
    <Container>
      <header>
        <AppTitle>Simples Conta</AppTitle>

        <div className="buttons-container">
          <SignInButton>
            Entrar
            <SignInIcon />
          </SignInButton>
          <RegisterButton>
            Cadastro
            <RegisterIcon />
          </RegisterButton>
        </div>
      </header>
    </Container>
  )
}

export default LandingPage
