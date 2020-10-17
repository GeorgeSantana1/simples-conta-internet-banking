import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import Input from '../../components/Input'
import { cnpjMask } from '../../utils/masks'

import {
  Container,
  InputContainer,
  PresentationContainer
} from './styles'

interface Errors {
  name?: string,
  cnpj?: string
}

const Login: React.FC = () => {
  const history = useHistory()
  
  const [name, setName] = useState('')
  let [cnpj, setCnpj] = useState('')

  const [errors, setErrors] = useState<Errors>()

  function maskCnpj(cnpj: string) {
    setCnpj(cnpjMask(cnpj))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    cnpj = cnpj
      .replace('-', '')
      .replace('.', '')
      .replace('.', '')
      .replace('/', '')

    const data = {
      name, cnpj
    }

    const scheme = Yup.object().shape({
      name: Yup.string().required('O nome é obrigatório'),
      cnpj: Yup.string()
        .required('O CNPJ é obrigatório')
        .test('len', 'CNPJ inválido', val => val?.toString().length === 14)
    })

    try {
      await scheme.validate(data, {
        abortEarly: false
      })

      console.log("DATA: ", data)

      history.push('/app')

      setErrors({})
    } catch(error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: any = {};

        error.inner.forEach((e: any) => {
          validationErrors[e.path] = e.message
        })

        setErrors(validationErrors)
      }
    }
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

      <InputContainer onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <Input
          name="name"
          label="Nome da empresa"
          onChange={e => setName(e.target.value)}
          error={errors?.name}
          placeholder="Empresa S/A"
        />
        <Input
          name="cnpj"
          label="CNPJ"
          value={cnpj}
          onChange={e => maskCnpj(e.target.value)}
          error={errors?.cnpj}
          placeholder="12.345.678/0009-10"
        />
        <button type="submit">
          Acessar
        </button>
      </InputContainer>
    </Container>
  )
}

export default Login
