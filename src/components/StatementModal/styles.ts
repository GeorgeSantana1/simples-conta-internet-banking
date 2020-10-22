import styled from 'styled-components'

export const Container = styled.div<{ show: boolean }>`
  position: absolute;
  background: white;
  width: 50vw;
  border-radius: 1.2rem;
  box-shadow: 0 0 500px rgba(0,0,0,0.4);
  flex-direction: column;
  padding: 2rem 1.8rem 2rem 1.8rem;
  transition: 0.3s;
  display: ${props => props.show ? 'flex' : 'none'};
  z-index: 5;
  align-self: center;
  margin-top: 20vh;
`

export const Title = styled.div<{ inOrOut?: 'in' | 'out' }>`
  display: flex;
  align-items: center;
  justify-content: center;

  .color-ball {
    margin-right: 20px;
    background: ${props => props.inOrOut === 'in' ? 'green' : 'red'};
  }
`

export const Description = styled.div<{ inOrOut?: 'in' | 'out' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;

    .value {
      color: ${props => props.inOrOut === 'in' ? 'green' : 'red'};
    }
  }
`

export const Date  = styled.div`
  font-size: 18px;
  font-weight: bold;
`

export const Value  = styled.div`
  font-size: 25px;
  margin-right: 20px;
  font-weight: 500;
`

export const Card  = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 375px;
  background: #333;
  height: 200px;
  box-shadow: 20px 20px 40px rgba(0,0,0,0.2);

  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const AppTitle = styled.p`
  font-size: 20px;
  margin-left: 15px;
  margin-top: 10px;
  color: white;
`

export const VisaIcon = styled.img`
  width: 75px;
  align-self: flex-end;
  margin-right: 20px;
`

export const Platform  = styled.div`
  font-size: 20px;
  font-weight: 800;
`

export const CardNumber = styled.p`
  font-size: 18px;
  margin-top: 30px;
  text-align: center;
  color: lightgray;
  letter-spacing: 8px;
  user-select: none;
`

export const ShelfLife = styled.p`
  color: white;
  margin-left: 30px;
`