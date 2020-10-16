import React from 'react'

import Input from '../../components/Input'
import { Link } from 'react-router-dom'

import {
  Container,
  InputContainer,
  PresentationContainer
} from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <PresentationContainer>
        <div>
          <h1>
            Conta PJ
            desenvolvida para
            <span> acelerar</span> o seu negócio
          </h1>

          <Link to="/">
            ABRIR MINHA CONTA PJ
          </Link>
        </div>
      </PresentationContainer>

      <InputContainer>
        <h1>Cadastro</h1>
        <Input name="name" label="Nome" />
        <Input name="email" label="Email" />
        <Input name="password" label="Senha" />
      </InputContainer>
    </Container>
  )
}

export default Login
