import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const circulo = styled(Link)`
  width: 64px;
  height: 64px;
  background-color: #44bd32;
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
`
