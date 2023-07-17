import styled from 'styled-components'

export const CardItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid 1px ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > span {
    text-align: right;
    font-weight: 700;
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    grid-template-rows: 2rem 2rem;

    span {
      grid-column: span 2;
    }

    button {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      gap: 0.5rem;

      border-radius: 0.375rem;
      background-color: ${(props) => props.theme['base-button']};
      box-shadow: none;
      border: none;

      font-size: 0.75rem;
      line-height: 160%;

      svg {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`
