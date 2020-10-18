import React, { useState } from 'react'

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
} from './styles'

const Dashboard: React.FC = () => {
  const [pageDisplayed, setPageDisplayed] = useState('AccountStatement')

  return (
    <Container>
      <aside>
        <Title>Simples Conta</Title>
        <BalanceContainer>
          <p>Saldo bancário</p>
          <h1>R$ 999.999,99</h1>
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
            Conta
          </NavItem>
        </nav>
      </aside>

      {pageDisplayed === 'Home' && <Home />}
      {pageDisplayed === 'AccountStatement' && <AccountStatement />}
    </Container>
  )
}

export default Dashboard
