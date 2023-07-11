import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-button']};
  width: min-content;

  button {
    border: none;
    color: ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['base-button']};

    :hover {
      cursor: pointer;
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    border: none;
    background-color: transparent;
    width: 1.25rem;
    text-align: center;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
