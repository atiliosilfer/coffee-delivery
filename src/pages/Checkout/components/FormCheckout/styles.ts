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

export const FormGrid = styled.form`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(12, 1fr);
`

interface FormGridItemProps {
  startColumn: number
  columnSize: number
}

export const FormGridItem = styled.form<FormGridItemProps>`
  grid-column-start: ${(props) => props.startColumn};
  grid-column-end: span ${(props) => props.columnSize};

  input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`

export const PaymentOptionContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

interface PaymentOptionProps {
  selected?: boolean
}

export const PaymentOption = styled.div<PaymentOptionProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  flex-basis: 32%;
  font-size: 0.75rem;
  border-radius: 6px;
  background-color: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  border: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.selected ? props.theme.purple : 'transparent'};

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background-color: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }
`
