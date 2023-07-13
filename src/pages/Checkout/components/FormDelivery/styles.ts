import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
`

interface CardTitleProps {
  colorIcon: 'yellow-dark' | 'purple'
}

export const CardTitle = styled.div<CardTitleProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme[props.colorIcon]};
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  h4 {
    font-size: 0.875rem;
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
`

interface FormGridItemProps {
  startColumn: number
  columnSize: number
}

export const FormGridItem = styled.div<FormGridItemProps>`
  grid-column-start: ${(props) => props.startColumn};
  grid-column-end: span ${(props) => props.columnSize};

  input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};

    &:focus {
      border-color: ${(props) => props.theme['yellow-dark']};
      outline: none;
    }
  }
`

export const PaymentOptionContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

interface PaymentOptionItemProps {
  checked?: boolean
}

export const PaymentOptionItem = styled.label<PaymentOptionItemProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  flex-basis: 32%;
  font-size: 0.75rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};

  input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }

  ${({ checked, theme }) => checked && inputChecked(theme)}
`

const inputChecked = (theme: any) => `
  border: 1px;
  border-style: solid;
  background-color: ${theme['purple-light']};
  border-color: ${theme.purple};
  `
