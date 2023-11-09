import BarraLateral from '../../Containers/BarraLateral'
import ListaDeTarefas from '../../Containers/ListaDeTarefas'
import BotaoAdd from '../../components/BotaoAdd'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdd />
    </>
  )
}

export default Home
