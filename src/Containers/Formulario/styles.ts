import styled from 'styled-components'

export const Form = styled.form`
  max-width: 546px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #ccc;
  display: flex;
  flex-direction: column;
  gap: 16px;

  textarea {
    resize: none;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  input {
    margin-right: 2px;
  }

  label {
    margin-right: 16px;
  }
`

export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
`
