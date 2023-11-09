import styled from 'styled-components'
import variaveis from '../../Styles/variaveis'

export const Aside = styled.aside`
  background-color: ${variaveis.colorSegundary};
  padding: 16px;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;
`
