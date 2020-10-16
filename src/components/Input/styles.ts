import styled from 'styled-components'
import { IoIosAlert } from 'react-icons/io'

export const Container = styled.div`
  margin-top: 10px;

  > label {
    font-size: 15px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  width: 275px;
  border-radius: 5px;

  > input {
    font-size: 16px;
    width: 230px;
    height: 45px;
    padding-left: 15px;
    @media (max-width: 800px) {
      width: 180px;
    }
  }

  @media (max-width: 800px) {
    width: 230px;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  position: relative;

  .error-container {
    display: none;
    padding: 5px;
    font-size: 14px;
    border-radius: 4px;
    background: green;
    position: absolute;
    bottom: 30px;
    left: -20px;
    right: -20px;
  }

  :hover {
    .error-container {
      display: unset;
    }
  }
`

export const ErrorIcon = styled(IoIosAlert)`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`