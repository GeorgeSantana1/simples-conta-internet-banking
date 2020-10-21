import React, { useEffect, useState } from 'react'

import {
  Container,
  StatementContainer,
  StatementItem,
  ColorBall,
  FilterContainer
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

interface Enterprise {
  empresaId: 2,
  nomeEmpresa: "EMPRESA DOIS S/A",
  cnpj: "77253158000106",
  dadosBancario: {
    banco: 999,
    bancoNome: "CONTA SIMPLES",
    agencia: 1,
    conta: 678956,
    digitoConta: "1"
  },
  saldo: 25500.00
}

interface Filters {
  transactionType: "ALL" | "SLIP_IN" | "CARD" | "TED_IN" | "PAY",
  flag?: 'credit' | 'debit',
}

const AccountStatement: React.FC = () => {
  const [actualTransaction, setActualTransaction] = useState<Transaction>(transactions[0])
  const [showModal, setShowModal] = useState(false)
  const [transaction, setTransaction] = useState<Transaction[]>([])

  const [filters, setFilters] = useState<Filters>({ transactionType: 'ALL', flag: 'credit' })

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

  const filterFunctions = {
    SLIP_IN(transaction: Transaction, enterprise: Enterprise) {
      console.log('SLIP_IN')
      return transaction.empresaId === enterprise.empresaId && transaction.tipoTransacao === 'SLIP_IN'
    },

    PAY(transaction: Transaction, enterprise: Enterprise) {
      console.log('PAY')
      return transaction.empresaId === enterprise.empresaId && transaction.tipoTransacao === 'PAY'
    },

    TED_IN(transaction: Transaction, enterprise: Enterprise) {
      console.log('TED_IN')
      return transaction.empresaId === enterprise.empresaId && transaction.tipoTransacao === 'TED_IN'
    },

    CARD(transaction: Transaction, enterprise: Enterprise) {
      console.log('CARD')
      if (filters.flag === 'credit') {
        return transaction.empresaId === enterprise.empresaId &&
        transaction.tipoTransacao === 'CARD' &&
        transaction.credito
      } else if (filters.flag === 'debit') {
        return transaction.empresaId === enterprise.empresaId &&
        transaction.tipoTransacao === 'CARD' &&
        !transaction.credito
      } else return transaction.empresaId === enterprise.empresaId && transaction.tipoTransacao === 'CARD'
    },

    ALL(transaction: Transaction, enterprise: Enterprise) {
      console.log('ALL')
      return transaction.empresaId === enterprise.empresaId
    }
  }

  function filterData(transaction: Transaction, enterprise: Enterprise) {
    // @ts-ignore
    const filter = filterFunctions[filters.transactionType]

    return filter(transaction, enterprise)
  }

  useEffect(() => {
    const enterprise: Enterprise = JSON.parse(String(localStorage.getItem('enterprise')))

    const filteredTransactions = transactions.filter(transaction => filterData(transaction, enterprise))

    setTransaction(filteredTransactions.reverse())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters])

  return (
    <Container onClick={backdropPress}>
      <StatementModal show={showModal} transaction={actualTransaction} />
      <div className="top-container">
        <h1>Extrato</h1>
        <FilterContainer>
          <select name="transaction-type" onChange={e => setFilters({ transactionType: e.target.value as Filters["transactionType"] })}>
            <option value="ALL">Todos</option>
            <option value="SLIP_IN">Depósito por boleto</option>
            <option value="TED_IN">Transferência bancária</option>
            <option value="PAY">Pagamento de boleto</option>
            <option value="CARD">Pagamento no cartão</option>
          </select>
          {filters?.transactionType === 'CARD' && (
            <select name="transaction-flag" id="yes" onChange={e => setFilters({
              transactionType: filters.transactionType, flag: e.target.value as Filters["flag"]
            })}>
            <option value="credit">Crédito</option>
              <option value="debit">Débito</option>
            </select>
          )}
        </FilterContainer>
      </div>
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
