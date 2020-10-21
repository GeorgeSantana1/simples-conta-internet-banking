import styled from 'styled-components'
import { IoLogoGithub } from 'react-icons/io'

export const Container = styled.div`
  width: 80%;
  left: 220.25px;
  height: 100vh;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(rgba(51,158,208,0.8) 0%, transparent 70%);
  color: white;
  user-select: none;

  > p {
    margin-bottom: 5px;
  }
`

export const ButtonsContainer = styled.div`
  > a {
    display: flex;
    margin-top: 5px;
  }
`

export const GitHubIcon = styled(IoLogoGithub)`
  width: 50px;
  height: 50px;
  color: white;
  transition: 0.2s;

  :hover {
    opacity: 0.4;
  }
`