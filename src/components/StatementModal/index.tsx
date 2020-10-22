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
  ShelfLife
} from './styles'

import visaIcon from '../../assets/visa.svg'

interface Props {
  show: boolean,
  transaction: {
    empresaId: number,
		dataTransacao: string,
		valor: number,
		finalCartao: string | null,
		tipoTransacao: string,
		descricaoTransacao: string,
		estabelecimento: string | null,
		credito: boolean
  }
}

const StatementModal: React.FC<Props> = ({ show, transaction }) => {
  return (
    <Container show={show}>
      <Title
        inOrOut={transaction.tipoTransacao === "SLIP_IN" || transaction.tipoTransacao === "TED_IN" ? 'in' : 'out'}
      >
        <ColorBall className="color-ball" />
        <h1>{transaction.descricaoTransacao}</h1>
      </Title>
      <Description inOrOut={transaction.tipoTransacao === "SLIP_IN" || transaction.tipoTransacao === "TED_IN" ? 'in' : 'out'}>
        <div className="info-container">
          <Date>
            {
              transaction.dataTransacao.split('T')[0].split('-')[2]
            }/
            {
              transaction.dataTransacao.split('T')[0].split('-')[1]
            }/
            {
              transaction.dataTransacao.split('T')[0].split('-')[0]
            }
          </Date>
          <Value className="value">R$ {String(transaction.valor).replace('.', ',')}</Value>
          <Platform>{transaction.estabelecimento}</Platform>
        </div>
        {transaction.finalCartao !== null && (
          <Card>
            <AppTitle>Simples Conta</AppTitle>
            <CardNumber>•••• •••• •••• {transaction.finalCartao}</CardNumber>
            <div className="bottom-container">
              <ShelfLife>05/2023</ShelfLife>
              <VisaIcon src={visaIcon} />
            </div>
          </Card>
        )}
      </Description>
    </Container>
  )
}

export default StatementModal
