import React from 'react'

import {
  Container,
  Title,
  BalanceContainer,
  NavItem,
  HomeIcon,
  FileIcon,
  AccountIcon,
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <aside>
        <Title>Simples Conta</Title>
        <BalanceContainer>
          <p>Saldo bancário</p>
          <h1>R$ 999.999,99</h1>
        </BalanceContainer>
        <nav>
          <NavItem>
            <HomeIcon />
            Início
          </NavItem>
          <NavItem>
            <FileIcon />
            Extrato da conta
          </NavItem>
          <NavItem>
            <AccountIcon />
            Conta
          </NavItem>
        </nav>
      </aside>
    </Container>
  )
}

export default Home
