import React from 'react'
import { Link } from 'react-router-dom'

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
          <SignInButton to="/auth">
            Entrar
          </SignInButton>
          <RegisterButton to="/">
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

          <Link to="/auth">
            ABRIR MINHA CONTA PJ
          </Link>
        </div>

        <img src={landingPageAnimation} alt="Revenue"/>
      </PresentationContainer>
    </Container>
  )
}

export default LandingPage
