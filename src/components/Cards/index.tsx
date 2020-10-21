import React from 'react'

import { Link } from 'react-router-dom'

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
        <Link to="https://github.com/joaopaulo-ld/">
          <GitHubIcon />
        </Link>
      </ButtonsContainer>
    </Container>
  )
}

export default Cards
