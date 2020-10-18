import React, { useState } from 'react'

import {
  Container,
  StatementContainer,
  StatementItem,
  ColorBall
} from './styles'

import transactions from '../../mocks/transactions.json'
import StatementModal from '../StatementModal'

interface Transaction {
  empresaId: number,
  dataTransacao: string,
  valor: number,
  finalCartao: string | null,
  tipoTransacao: string,
  descricaoTransacao: string,
  estabelecimento: string | null,
  credito: boolean
}

const AccountStatement: React.FC = () => {
  const [actualTransaction, setActualTransaction] = useState<Transaction>(transactions[0])
  const [showModal, setShowModal] = useState(false)

  function toggleModal(transaction: Transaction) {
    setActualTransaction(transaction)
    setShowModal(true)
  }

  return (
    <Container>
      <StatementModal show={showModal} transaction={actualTransaction} />
      <h1>Extrato</h1>
      <StatementContainer>
        {transactions.map(transaction => (
          <StatementItem
            inOrOut={transaction.tipoTransacao === "SLIP_IN" || transaction.tipoTransacao === "TED_IN" ? 'in' : 'out'}
            onClick={() => toggleModal(transaction)}
          >
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
