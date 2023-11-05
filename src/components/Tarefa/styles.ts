import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDefundo(props: TagProps) {
  if (props.parametro === 'status') {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  } else {
    if (props.prioridade === enums.Prioridade.URGENTE)
      return variaveis.vermelho2
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.laranja
  }
  return '#394aef'
}
export const Card = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: #313131;
  color: #e1e1e1e1;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.505);
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  display: inline-block;
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${(props) => retornaCorDefundo(props)};
  border-radius: 8px;
  margin-right: 16px;
`
export const Descricao = styled.textarea`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  resize: none;
  background-color: transparent;
  border: none;
  color: #e1e1e1e1;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  padding: 8px 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  background-color: #0188c9;
  color: #fff;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho2};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const a = styled(Botao)`
  background-color: ${variaveis.verde};
`
