import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
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

export const InputContainer = styled.div`
  padding: 20px 20px 35px 20px;
  border-radius: 8px;
  box-shadow: 0 0 25px rgba(0,0,0,0.2);

  > h1 {
    text-align: center;
  }
`