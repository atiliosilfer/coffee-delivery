import styled from 'styled-components'

export const CoffeeMenuTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: 800;
  margin-top: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ContainerCoffeeMenu = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
`
