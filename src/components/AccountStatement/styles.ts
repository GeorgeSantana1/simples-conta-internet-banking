import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  padding-left: 50px;

  > h1 {
    margin-top: 10px;
  }
`

export const StatementContainer = styled.div`
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  height: 80vh;
  margin-bottom: 30px;
  overflow-y: auto;
  padding-top: 30px;
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export const StatementItem = styled.div<{ inOrOut?: 'in' | 'out' }>`
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  padding: 15px 10px 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
    display: flex;
    align-items: center;

    > div {
      margin-left: 15px;

      > h1 {
        font-size: 25px;
      }
    }
  }

  .color-ball {
    background: ${props => props.inOrOut === 'in' ? 'green' : 'red'};
  }

  .right-side {
    > h1 {
      font-size: 25px;
      color: ${props => props.inOrOut === 'in' ? 'green' : 'red'};
      margin-right: 20px;
      font-weight: 500;
    }
  }

  :hover {
    box-shadow: 0 0 30px rgba(0,0,0,0.15);
  }
`

export const ColorBall = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`
