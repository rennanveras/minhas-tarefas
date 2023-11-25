import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import * as SG from '../../Styles'
import * as enums from '../../utils/enums/Tarefa'
import { alteraTermo } from '../../store/reducers/filtro'
import { useNavigate } from 'react-router-dom'

export type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside asideComFiltros={mostrarFiltros}>
      <div>
        {mostrarFiltros ? (
          <>
            <SG.Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <SG.Botao onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </SG.Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
