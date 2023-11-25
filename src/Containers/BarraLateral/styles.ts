import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

type Props = {
  asideComFiltros: boolean
}

export const Aside = styled.aside<Props>`
  background-color: ${variaveis.colorSegundary};
  padding: 16px;
  height: 100vh;
  @media (max-width: 640px) {
    height: ${(props) => (props.asideComFiltros ? '180px' : 'auto')};
    position: sticky;
    top: 0;
    left: 0;
    border-bottom: 1px solid #999;
  }
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 8px;
  }
`
