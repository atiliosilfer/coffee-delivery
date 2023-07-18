import styled from 'styled-components'

export const CoffeeMenuTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  margin-top: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerCoffeeMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 1180px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`
