import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;

  @media (min-width: 800px) {
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    margin-top: 0;
  }
`

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .app-title {
    font-size: 35px;
    font-weight: lighter;
    margin-bottom: 20px;

    user-select: none;
  }

  > div {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h1 {
      font-size: 20px;
      font-weight: 200;
      text-align: center;
      line-height: 30px;
      margin-bottom: 30px;

      > strong {
        color: #339ED0;
      }
    }
  }

  @media (min-width: 800px) {
    flex-direction: column;
    margin-top: 10px;
    justify-content: center;

    .app-title {
      font-size: 35px;
      font-weight: lighter;
      margin-bottom: 20px;
      align-self: flex-start;

      user-select: none;
    }
    
    > div {
      width: 350px;

      > h1 {
        text-align: left;
        font-size: 30px;
      }
    }
  }
`

export const InputContainer = styled.form`
  padding: 20px 20px 35px 20px;
  border-radius: 8px;
  box-shadow: 0 0 25px rgba(0,0,0,0.2);

  > h1 {
    text-align: center;
  }

  > button {
    width: 100%;
    background: green;
    border-radius: 6px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: white;
    font-size: 16px;
  }
`