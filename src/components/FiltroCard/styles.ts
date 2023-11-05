import styled from 'styled-components'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  width: 92px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#313131' : '#515151')};
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
