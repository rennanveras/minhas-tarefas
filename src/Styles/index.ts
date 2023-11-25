import { styled, createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 640px) {
    display: block;
  }
`

export const MainContainer = styled.main`
  background-color: ${variaveis.colorPrimary};
  padding: 40px;
  color: ${variaveis.branco};
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 640px) {
    padding: 20px;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 640px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`

export const Campo = styled.input`
  border: 1px solid ${variaveis.branco};
  color: ${variaveis.branco};
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  background-color: ${variaveis.colorSegundary};
  width: 100%;

  &::placeholder {
    color: #c1c1c1;
  }
`

export const Botao = styled.button`
  font-weight: bold;
  padding: 8px 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulClaro};
  color: #fff;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
