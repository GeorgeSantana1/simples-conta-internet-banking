import styled, { css } from 'styled-components'
import { FiHome, FiUsers, FiFileText, FiPower } from 'react-icons/fi'

export const Container = styled.div`
  display: flex;

  > aside {
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    padding: 20px 0 20px 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > nav {
      padding-top: 20px;
      border-top: 0.38px solid lightgray;
    }

    .exit-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      transition: 0.2s;
      cursor: pointer;
      
      :hover {
        box-shadow: 0 0 30px rgba(255,0,0,0.5)
      }
    }
  }
`

export const Title = styled.p`
  font-size: 25px;
  font-weight: lighter;
  user-select: none;
  margin-right: 20px;
`

export const BalanceContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  > p {
    font-size: 15px;
    color: gray;
  }
`

export const NavItem = styled.div<{ displayed?: boolean }>`
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
  padding: 5px 5px 5px 10px;
  border-radius: 8px 0 0 8px;
  transition: 0.3s;
  cursor: pointer;
  background: ${props => props.displayed ? 'rgba(51,158,208,0.2)' : "none"};

  :hover {
    background: rgba(51,158,208,0.2);
  }
`

const iconCss = css`
  width: 20px;
  height: 20px;
  color: black;
  margin-right: 10px;
`

export const HomeIcon = styled(FiHome)`
  ${iconCss}
`

export const FileIcon = styled(FiFileText)`
  ${iconCss}
`

export const AccountIcon = styled(FiUsers)`
  ${iconCss}
`

export const ExitIcon = styled(FiPower)`
  ${iconCss}
  margin-right: 0;
`