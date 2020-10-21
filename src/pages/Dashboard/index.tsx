import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'

import AccountStatement from '../../components/AccountStatement'
import Home from '../../components/Home'

import {
  Container,
  Title,
  BalanceContainer,
  NavItem,
  HomeIcon,
  FileIcon,
  AccountIcon,
  ExitIcon,
} from './styles'

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

const Dashboard: React.FC = () => {
  const history = useHistory()

  const [enterprise, setEnterprise] = useState<Enterprise>()
  const [pageDisplayed, setPageDisplayed] = useState('AccountStatement')

  function logOut() {
    localStorage.clear()

    history.push('/')
  }

  useEffect(() => {
    const enterprise = JSON.parse(String(localStorage.getItem('enterprise')))

    setEnterprise(enterprise)
  }, [])

  return (
    <Container>
      <aside>
        <div>
          <Title>Simples Conta</Title>
          <BalanceContainer>
            <p>Saldo bancário</p>
            <h1>R$ {enterprise?.saldo}</h1>
          </BalanceContainer>
          <nav>
            <NavItem
              displayed={pageDisplayed === 'Home'}
              onClick={() => { setPageDisplayed('Home') }}
            >
              <HomeIcon />
              Início
            </NavItem>
            <NavItem
              displayed={pageDisplayed === 'AccountStatement'}
              onClick={() => { setPageDisplayed('AccountStatement') }}
            >
              <FileIcon />
              Extrato da conta
            </NavItem>
            <NavItem>
              <AccountIcon />
              Cartões
            </NavItem>
            <NavItem>
              <AccountIcon />
              Conta
            </NavItem>
          </nav>
        </div>
        <div className="exit-container" onClick={logOut}>
          <ExitIcon />
        </div>
      </aside>

      {pageDisplayed === 'Home' && <Home />}
      {pageDisplayed === 'AccountStatement' && <AccountStatement />}
    </Container>
  )
}

export default Dashboard
