import React, { useEffect, useState } from 'react'

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
  const [transaction, setTransaction] = useState<Transaction[]>([])

  console.log(transaction)

  const [containerHover, setContainerHover] = useState<any>('all')

  function toggleModal(transaction: Transaction) {
    setActualTransaction(transaction)
    setShowModal(true)
    setContainerHover('none')
  }

  function backdropPress() {
    if (showModal) {
      setShowModal(false)
      setContainerHover('all')
    }
  }

  useEffect(() => {
    const filteredTransactions = transactions.filter(transaction => transaction.empresaId === 2)

    setTransaction(filteredTransactions.reverse())
  }, [])

  return (
    <Container onClick={backdropPress}>
      <StatementModal show={showModal} transaction={actualTransaction} />
      <h1>Extrato</h1>
      <StatementContainer style={{ pointerEvents: containerHover }}>
        {transaction.map(enterpriseTransaction => (
          <StatementItem
            inOrOut={enterpriseTransaction.tipoTransacao === "SLIP_IN" || enterpriseTransaction.tipoTransacao === "TED_IN" ? 'in' : 'out'}
            onClick={() => toggleModal(enterpriseTransaction)}
          >
            <div className="left-side">
              <ColorBall className="color-ball" />
              <div>
                <h1>{enterpriseTransaction.descricaoTransacao}</h1>
                <p>{enterpriseTransaction.dataTransacao}</p>
              </div>
            </div>
            <div className="right-side">
              <h1>{enterpriseTransaction.tipoTransacao === "SLIP_IN" || enterpriseTransaction.tipoTransacao === "TED_IN" ? '+' : '-'} R$ {String(enterpriseTransaction.valor).replace('.', ',')}</h1>
            </div>
          </StatementItem>
        ))}
      </StatementContainer>
    </Container>
  )
}

export default AccountStatement
