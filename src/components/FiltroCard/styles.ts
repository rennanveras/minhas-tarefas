import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  width: 92px;
  height: 62px;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.amarelo : variaveis.branco)};
  background-color: ${(props) =>
    props.ativo ? variaveis.colorPrimary : variaveis.colorTertiary};
  padding: 8px;
  color: ${(props) => (props.ativo ? variaveis.amarelo : '#ffffff')};
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
