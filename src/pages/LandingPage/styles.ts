import styled from 'styled-components'

export const Container = styled.div`
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    justify-content: space-around;

    @media (min-width: 800px) {
      width: unset;
      margin-right: 20px;
    }
  }
`

export const AppTitle = styled.div`
  font-size: 25px;
  font-weight: lighter;

  @media (max-width: 800px) {
    font-size: 20px;
    font-weight: 500;
  }

  user-select: none;
`

export const SignInButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: 85px;
  cursor: pointer;
  transition: 0.3s;
  border: 2px solid #0c78ac;
  border-radius: 5px;

  @media (min-width: 800px) {
    margin-right: 20px;
  }

  :hover {
    opacity: 0.6
  }
`

export const SignInIcon = styled.div``

export const RegisterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: 85px;
  transition: 0.3s;
  cursor: pointer;
  background: #0c78ac;
  border-radius: 5px;
  color: white;

  :hover {
    opacity: 0.6
  }
`

export const RegisterIcon = styled.div``
