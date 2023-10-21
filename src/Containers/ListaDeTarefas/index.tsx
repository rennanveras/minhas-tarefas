import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

const ListaDeTarefas = () => {
  const tarefas = [
    {
      titulo: 'Fazer pão',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: 'compra fermento'
    },
    {
      titulo: 'Limpar a casa',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: ''
    },
    {
      titulo: 'Fazer bolo',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'compra ovos, e gás'
    }
  ]

  return (
    <S.AreaTarefas>
      <p>
        2 tarefas marcadas como &ldquo;categoria&ldquo; e &ldquo;termo&ldquo;
      </p>
      <S.ListTarefas>
        {tarefas.map((item) => (
          <li key={item.titulo}>
            <Tarefa
              titulo={item.titulo}
              prioridade={item.prioridade}
              status={item.status}
              descricao={item.descricao}
            />
          </li>
        ))}
      </S.ListTarefas>
    </S.AreaTarefas>
  )
}

export default ListaDeTarefas
