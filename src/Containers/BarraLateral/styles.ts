import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #222222;
  padding: 16px;
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  border: 1px solid #e1e1e1;
  color: #e1e1e1;
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
  font-size: 14px;
  background-color: #222222;
  width: 100%;
`
