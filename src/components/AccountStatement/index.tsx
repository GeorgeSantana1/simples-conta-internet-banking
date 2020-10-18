import React from 'react'

import {
  Container,
  StatementContainer,
  StatementItem,
  ColorBall
} from './styles'

import transactions from '../../mocks/transactions.json'
import StatementModal from '../StatementModal'

const AccountStatement: React.FC = () => {
  return (
    <Container>
      <StatementModal />
      <h1>Extrato</h1>
      <StatementContainer>
        {transactions.map(transaction => (
          <StatementItem inOrOut={transaction.tipoTransacao === "SLIP_IN" || transaction.tipoTransacao === "TED_IN" ? 'in' : 'out'}>
            <div className="left-side">
              <ColorBall className="color-ball" />
              <div>
                <h1>{transaction.descricaoTransacao}</h1>
                <p>{transaction.dataTransacao}</p>
              </div>
            </div>
            <div className="right-side">
              <h1>{transaction.tipoTransacao === "SLIP_IN" || "TED_IN" ? '+' : '-'} R$ {String(transaction.valor).replace('.', ',')}</h1>
            </div>
          </StatementItem>
        ))}
      </StatementContainer>
    </Container>
  )
}

export default AccountStatement
