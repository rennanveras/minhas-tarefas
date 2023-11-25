import { Link } from 'react-router-dom'

import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

export const circulo = styled(Link)`
  width: 64px;
  height: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;

  @media (max-width: 640px) {
    width: 48px;
    height: 48px;
    right: 20px;
    bottom: 20px;
    font-size: 34px;
  }
`
