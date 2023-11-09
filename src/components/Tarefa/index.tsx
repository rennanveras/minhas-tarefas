import { useDispatch } from 'react-redux'
import { ChangeEvent, useEffect, useState } from 'react'

import * as S from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import * as SG from '../../Styles'

import * as enums from '../../utils/enums/Tarefa'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function alteraStatusTarefa(e: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: e.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          name=""
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <div>
        <S.Tag parametro="prioridade" prioridade={prioridade}>
          {prioridade}
        </S.Tag>
        <S.Tag parametro="status" status={status}>
          {status}
        </S.Tag>
      </div>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      ></S.Descricao>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <SG.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    id,
                    status,
                    titulo,
                    prioridade
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </SG.BotaoSalvar>
            <S.BotaoCancelar
              onClick={() => {
                cancelarEdicao()
              }}
            >
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <SG.Botao onClick={() => setEstaEditando(true)}>Editar</SG.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
