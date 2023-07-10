import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 7fr 5fr;

  @media (max-width: 768px) {
    grid-template-columns: 12fr;
  }

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CardContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem 2.75rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
`
