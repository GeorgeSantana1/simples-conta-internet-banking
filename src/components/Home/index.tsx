import React from 'react'
import { Line } from 'react-chartjs-2'

import {
  Container,
  ChartContainer,
  InfoContainer,
} from './styles'

import transactions from '../../mocks/transactions.json'

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

interface Transaction {
  empresaId: number,
  dataTransacao: string,
  valor: number,
  finalCartao: null | string,
  tipoTransacao: "PAY" | "CARD" | "TED_IN",
  descricaoTransacao: string,
  estabelecimento: string,
  credito: boolean
}

const Home: React.FC = () => {
  const data = {
    labels: transactions.map(transaction => {
      const dateArray = transaction.dataTransacao

      const [ date ] = dateArray.split('T')

      const [year, month, day] = date.split('-')

      return `${day}/${month}`
    }),
    datasets: [
      {
        label: 'Ganho',
        backgroundColor: '#339ED0',
        data: transactions.map(transaction => transaction.valor)
      },
    ]
  }

  return (
    <Container>
      <ChartContainer>
        <Line
          data={data}
          height={300}
          width={800}
          options={{
            title: {
              display: true,
              text: 'Extrato',
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'right'
            }
          }}
        />
      </ChartContainer>

      <InfoContainer></InfoContainer>
    </Container>
  )
}

export default Home
