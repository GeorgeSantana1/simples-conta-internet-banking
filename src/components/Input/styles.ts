import styled from 'styled-components'
import { IoIosAlert } from 'react-icons/io'

export const Container = styled.div`
  margin-top: 10px;

  > label {
    font-size: 15px;
  }
`

export const InputContainer = styled.div<{ error?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  width: 275px;
  border-radius: 5px;
  transition: border 0.3s;
  border: ${props => props.error ? '1px solid #b22' : 'none'};

  > input {
    font-size: 16px;
    width: 230px;
    height: 45px;
    padding-left: 15px;
    transition: 0.2s;

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
    background: #b22;
    color: white;
    text-align: right;
    position: absolute;
    bottom: 30px;
    right: 0;
  }

  :hover {
    .error-container {
      display: unset;
    }
  }
`

export const ErrorIcon = styled(IoIosAlert)`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: #b22;
`