import React from 'react'

import {
  Container,
  AppTitle,
  SignInButton,
  RegisterButton,
  PresentationContainer,
} from './styles'

import landingPageAnimation from '../../assets/revenue-animate.svg'

const LandingPage: React.FC = () => {
  return (
    <Container>
      <header>
        <AppTitle>Simples Conta</AppTitle>

        <div className="buttons-container">
          <SignInButton>
            Entrar
          </SignInButton>
          <RegisterButton>
            Cadastro
          </RegisterButton>
        </div>
      </header>

      <PresentationContainer>
        <div>
          <h1>
            Conta PJ
            desenvolvida para
            <span> acelerar</span> o seu negócio
          </h1>

          <button>
            ABRIR MINHA CONTA PJ
          </button>
        </div>

        <img src={landingPageAnimation} alt="Revenue"/>
      </PresentationContainer>
    </Container>
  )
}

export default LandingPage
