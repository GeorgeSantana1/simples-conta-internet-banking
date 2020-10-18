import React from 'react'

import { ColorBall } from '../AccountStatement/styles'

import {
  Container,
  Title,
  Description,
  Date,
  Value,
  Card,
  AppTitle,
  VisaIcon,
  Platform,
  CardNumber,
} from './styles'

import visaIcon from '../../assets/visa.svg'

const StatementModal: React.FC = () => {
  return (
    <Container show={true}>
      <Title inOrOut="in">
        <ColorBall className="color-ball" />
        <h1>Compra com cartão de crédito</h1>
      </Title>
      <Description>
        <Date>09/10/2020</Date>
        <Value>R$ 5000,00</Value>
        <Platform>FACEBOOK</Platform>
        <Card>
          <AppTitle>Simples Conta</AppTitle>
          <CardNumber>•••• •••• •••• 1234</CardNumber>
          <VisaIcon src={visaIcon} />
        </Card>
      </Description>
    </Container>
  )
}

export default StatementModal
