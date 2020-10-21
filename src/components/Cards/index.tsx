import React from 'react'

import {
  Container,
  ButtonsContainer,
  GitHubIcon,
} from './styles'

const Cards: React.FC = () => {
  return (
    <Container>
      <h1>Seção em manutenção!</h1>
      <p>Em breve traremos novidades...</p>
      <ButtonsContainer>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/joaopaulo-ld/simples-conta-internet-banking">
          <GitHubIcon />
        </a>
      </ButtonsContainer>
    </Container>
  )
}

export default Cards
