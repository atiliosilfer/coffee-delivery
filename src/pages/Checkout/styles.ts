import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 7fr 5fr;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
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

export const BillContainer = styled.div`
  div {
    display: flex;
    margin-bottom: 0.75rem;
    align-items: center;
    justify-content: space-between;
    line-height: 130%;
  }

  div:last-of-type {
    color: ${(props) => props.theme['base-subtitle']};

    span {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 130%;
    }
  }

  button {
    display: flex;
    padding: 0.75rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    align-self: stretch;
    border-radius: 0.375rem;
    background: ${(props) => props.theme.yellow};
    box-shadow: none;
    border: none;
    width: -webkit-fill-available;
    margin-top: 0.75rem;
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
  }
`
