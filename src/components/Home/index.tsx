/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { Line, Bar, ChartData } from 'react-chartjs-2'

import {
  Container,
  ChartContainer,
  InfoContainer,
  EnterpriseName
} from './styles'

import transactionsJson from '../../mocks/transactions.json'

import { cnpjMask } from '../../utils/masks'

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
  empresaId: number,
  nomeEmpresa: string,
  cnpj: string,
  dadosBancario: {
    banco: number,
    bancoNome: string,
    agencia: number,
    conta: number,
    digitoConta: string
  },
  saldo: number
}

const Home: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [enterprise, setEnterprise] = useState<Enterprise>()

  const data: ChartData<Chart.ChartData> = {
    labels: transactions.map((transaction: Transaction) => {
      const dateArray = transaction.dataTransacao

      const [ date ] = dateArray.split('T')

      const [, month, day] = date.split('-')

      return `${day}/${month}`
    }),
    datasets: [
      {
        label: 'Saída',
        backgroundColor: 'rgba(255,0,0,0.6)',
        data: transactions.map((transaction: Transaction) => {
          if (transaction.tipoTransacao !== 'SLIP_IN' && transaction.tipoTransacao !== 'TED_IN') {
            return transaction.valor
          }
        }),
        barThickness: 20
      },
      {
        label: 'Entrada',
        backgroundColor: 'rgba(0,150,0,0.6)',
        data: transactions.map((transaction: Transaction) => {
          if (transaction.tipoTransacao === 'SLIP_IN' || transaction.tipoTransacao === 'TED_IN') {
            return transaction.valor
          }
        }),
        barThickness: 20
      }
    ]
  }

  useEffect(() => {
    const enterprise: Enterprise = JSON.parse(String(localStorage.getItem('enterprise')))

    const transactions: Transaction[] = transactionsJson.filter(transaction => transaction.empresaId === enterprise.empresaId)

    setEnterprise(enterprise)
    setTransactions(transactions.reverse())
  }, [])

  return (
    <Container>
      <ChartContainer>
        <Bar
          data={data}
          width={(window.innerWidth) * 0.5}
          height={(window.innerHeight) * 0.3}
          options={{
            legend: {
              display: true,
              position: 'right',

            }
          }}
        />
      </ChartContainer>

      <InfoContainer>
        <h1>Sobre</h1>
        <EnterpriseName>{enterprise?.nomeEmpresa}</EnterpriseName>
        <p>
          CNPJ: {cnpjMask(String(enterprise?.cnpj))}
        </p>
        <p>
          Agência: 000{String(enterprise?.dadosBancario.agencia)}
        </p>
        <p>
          Conta: {String(enterprise?.dadosBancario.conta)}
        </p>
      </InfoContainer>
    </Container>
  )
}

export default Home
