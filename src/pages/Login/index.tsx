import React, { useState } from 'react'

import Input from '../../components/Input'
import { cnpjMask } from '../../utils/masks'

import {
  Container,
  InputContainer,
  PresentationContainer
} from './styles'

const Login: React.FC = () => {
  const [name, setName] = useState('')
  const [cnpj, setCnpj] = useState('')

  function maskCnpj(cnpj: string) {
    setCnpj(cnpjMask(cnpj))
  }

  return (
    <Container>
      <PresentationContainer>
        <h1 className="app-title">Simples Conta</h1>
        <div>
          <h1>
            Você está a poucos
            passos de uma nova
            <strong> experiência financeira</strong>
          </h1>
        </div>
      </PresentationContainer>

      <InputContainer>
        <h1>Entrar</h1>
        <Input
          name="name"
          label="Nome da empresa"
        />
        <Input
          name="cnpj"
          label="CNPJ"
          value={cnpj}
          onChange={e => maskCnpj(e.target.value)}
        />
        <Input
          name="password"
          label="Senha"
        />
      </InputContainer>
    </Container>
  )
}

export default Login
