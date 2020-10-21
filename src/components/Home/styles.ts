import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ChartContainer = styled.div`
  border: 1px solid lightgray;
  padding: 30px;
  width: 70%;
  height: 45vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoContainer = styled(ChartContainer)`
  margin-top: 20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px;

  > h1 {
    font-size: 30px;
    font-weight: 200;
  }
`

export const EnterpriseName = styled.p`
  font-size: 20px;
  font-weight: 800;

  > p {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
`