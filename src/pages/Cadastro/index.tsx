import BarraLateral from '../../Containers/BarraLateral'
import { Aside } from '../../Containers/BarraLateral/styles'
import Formulario from '../../Containers/Formulario/Index'
import { MainContainer } from '../../Styles'

const Cadastro = () => {
  return (
    <>
      <BarraLateral />
      <MainContainer>
        <Formulario />
      </MainContainer>
    </>
  )
}

export default Cadastro
