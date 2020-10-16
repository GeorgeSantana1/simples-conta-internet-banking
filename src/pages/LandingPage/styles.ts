import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
    width: 55%;
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

export const SignInButton = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: 85px;
  cursor: pointer;
  transition: 0.3s;
  border: 2px solid #339ED0;
  border-radius: 5px;
  color: #339ED0;

  @media (min-width: 800px) {
    margin-right: 20px;
  }

  :hover {
    opacity: 0.6
  }
`

export const RegisterButton = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: 85px;
  transition: 0.3s;
  cursor: pointer;
  background: #339ED0;
  border-radius: 5px;
  color: white;

  :hover {
    opacity: 0.6
  }
`

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
      font-size: 25px;
      text-align: center;
      line-height: 30px;

      > span {
        color: #339ED0;
      }
    }

    > a {
      background: #339ED0;
      margin-top: 15px;
      padding: 10px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      font-size: 17px;
      box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
      cursor: pointer;
      transition: 0.3s;
      text-decoration: none;

      :hover {
        opacity: 0.7;
      }
    }
  }

  > img {
    margin-top: 20px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
    margin-top: 10px;
    
    > div {
      width: 350px;

      > h1 {
        text-align: left;
        font-size: 30px;
      }

      > a {
        align-self: flex-start
      }
    }

    > img {
      min-height: 500px;
    }
  }
`