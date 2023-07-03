import styled from 'styled-components'

export const ContainerCoffeeMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 16rem;
  padding: 1.25rem;
  margin-top: 2rem;

  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme['base-card']};

  img {
    position: relative;
    width: 7.5rem;
    top: -2.5rem;
  }

  h5 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }

  label {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ContainerCoffeeChip = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  top: -1.5rem;
  position: relative;
`

export const CoffeChip = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;

  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`

export const ContainerFormCoffeeMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;

  span {
    text-align: right;
    font-size: 0.875rem;

    strong {
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.25rem;
      text-align: right;
    }
  }

  > button {
    display: flex;
    padding: 0.35rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
    color: ${(props) => props.theme['base-card']};
    background-color: ${(props) => props.theme['purple-dark']};

    border: none;
    box-shadow: 0 0 0 0;
    outline: 0;

    :hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.purple};
    }
  }
`
