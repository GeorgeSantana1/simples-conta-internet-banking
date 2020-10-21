/* eslint-disable no-throw-literal */
import React, { FormEvent, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import Input from '../../components/Input'
import { cnpjMask } from '../../utils/masks'

import {
  Container,
  InputContainer,
  PresentationContainer
} from './styles'

import enterprises from '../../mocks/enterprises.json'

interface Errors {
  [key: string]: string
}

interface Enterprise {
  empresaId: number,
  nomeEmpresa: string,
  cnpj: string,
  dadosBancario: {
    banco: number,
    bancoNome: string,
    agencia: number,
    conta: number,
    digitoConta: string
  },
  saldo: number
}

const Login: React.FC = () => {
  const history = useHistory()
  const [agency, setAgency] = useState<string | undefined>()
  const [account, setAccount] = useState<string | undefined>()
  const [digit, setDigit] = useState<string | undefined>()
  const [cnpj, setCnpj] = useState<string | undefined>()

  const [errors, setErrors] = useState<Errors>()

  function maskCnpj(cnpj: string) {
    setCnpj(cnpjMask(cnpj))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      agency,
      account,
      digit,
      cnpj
    }

    const scheme = Yup.object().shape({
      agency: Yup.string()
        .required('Agência é obrigatória')
        .test('len', 'Agência inválida', val => val?.toString().length === 4),
      account: Yup.string()
        .required('A conta é obrigatório')
        .test('len', 'Conta inválida', val => val?.toString().length === 6),
      digit: Yup.string()
        .required('Dígito obrigatório')
        .test('len', 'Dígito inválido', val => val?.toString().length === 1),
      cnpj: Yup.string()
        .required('O CNPJ é obrigatório')
        .test('len', 'CNPJ inválido', val => val?.toString().length === 18)
    })

    try {
      await scheme.validate(data, {
        abortEarly: false
      })

      const replacedCnpj = cnpj?.replace('.', '')
        .replace('.', '')
        .replace('/', '')
        .replace('-', '')

      const enterprise: Enterprise[] = enterprises.filter(enterprises =>
        enterprises.cnpj === replacedCnpj &&
        enterprises.dadosBancario.agencia === Number(agency) &&
        enterprises.dadosBancario.conta === Number(account) &&
        enterprises.dadosBancario.digitoConta === digit
      )

      console.log('ENTERPRISEEEEE: ', enterprise)

      if (enterprise.length === 0) {
        const validationErrors: Errors = {
          enterpriseNotFoundError: 'Empresa não encontrada'
        }

        return setErrors(validationErrors)
      }

      localStorage.setItem('enterprise', JSON.stringify(enterprise[0]))

      history.push('/app')

      setErrors({})
    } catch(error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: Errors = {}
        console.log(error)

        error.inner.forEach((e: Yup.ValidationError) => {
          validationErrors[e.path] = e.message
        })

        setErrors(validationErrors)
      } else console.log(error)
    }
  }

  function onlyNumber(event: any) {
    var key = event.keyCode || event.which

    key = String.fromCharCode(key)

    var regex = /^[0-9.]+$/

    if(!regex.test(key)) {
        event.returnValue = false

        if(event.preventDefault) event.preventDefault()
    }
  }

  useEffect(() => {
    const enterprise = localStorage.getItem('enterprise')

    if (enterprise !== null) {
      history.push('/app')
    }
  }, [history])

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
        <div className="account-info-container">
          <Input
            label="Agência"
            onChange={e => setAgency(e.target.value)}
            error={errors?.agency || errors?.enterpriseNotFoundError}
            placeholder="0001"
            maxLength={4}
            onKeyPress={onlyNumber}
          />
          <Input
            label="Conta"
            onChange={e => setAccount(e.target.value)}
            error={errors?.account || errors?.enterpriseNotFoundError}
            placeholder="123456"
            maxLength={6}
            onKeyPress={onlyNumber}
          />
          <Input
            label="Dígito"
            onChange={e => setDigit(e.target.value)}
            error={errors?.digit || errors?.enterpriseNotFoundError}
            placeholder="1"
            maxLength={1}
            onKeyPress={onlyNumber}
          />
        </div>
        <Input
          label="CNPJ"
          value={cnpj}
          onChange={e => maskCnpj(e.target.value)}
          error={errors?.cnpj || errors?.enterpriseNotFoundError}
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
