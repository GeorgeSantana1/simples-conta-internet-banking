import React from 'react'
import { Line } from 'react-chartjs-2'

import {
  Container,
  ChartContainer,
  InfoContainer,
  EnterpriseName
} from './styles'

import transactions from '../../mocks/transactions.json'

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
        label: 'Transações',
        backgroundColor: 'red',
        data: transactions.map(transaction => {
          if (transaction.empresaId === 1) {
            return transaction.valor
          }
        })
      },
      {
        label: 'Recebidos',
        backgroundColor: 'green',
        data: transactions.map(transaction => {
          if (transaction.empresaId === 1 && transaction.tipoTransacao === 'SLIP_IN' || 'TED_IN') {
            return transaction.valor
          }
        })
      }
    ]
  }

  return (
    <Container>
      <ChartContainer>
        <Line
          data={data}
          width={(window.innerWidth) * 0.5}
          height={(window.innerHeight) * 0.3}
          options={{
            legend: {
              display: true,
            }
          }}
        />
      </ChartContainer>

      <InfoContainer>
        <h1>Sobre</h1>
        <EnterpriseName>Empresa UM</EnterpriseName>
        <p>
          CNPJ: 00.000.000/0000-00
        </p>
        <p>
          Agência: 1
        </p>
        <p>
          Conta: 678956
        </p>
      </InfoContainer>
    </Container>
  )
}

export default Home
