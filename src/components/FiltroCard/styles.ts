import styled from 'styled-components'

import { Props } from '.'

type PropsOmit = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsOmit>`
  width: 92px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#313131' : '#5e5e5e')};
  padding: 8px;
  color: ${(props) => (props.ativo ? '#1E90FF' : '#ffffff')};
`

export const Contador = styled.span`
  font-size: 24px;
  font-weight: bold;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
  display: block;
`
