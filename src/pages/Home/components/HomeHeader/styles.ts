import styled from 'styled-components'

interface HeaderTopicContainerProps {
  color: 'yellow-dark' | 'yellow' | 'base-text' | 'purple'
}

export const HomeHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    img {
      display: none !important;
      visibility: hidden;
    }
  }

  @media (max-width: 1440px) {
    display: block;

    img {
      margin: 1rem auto;
      display: block;
    }
  }
`

export const HeaderTopicsContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 0.75rem;
`

export const HeaderTopic = styled.div<HeaderTopicContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;

    min-width: 2rem;
    min-height: 2rem;

    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[props.color]};
  }
`
