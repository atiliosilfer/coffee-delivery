import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.75rem;

    a {
      width: 2.375rem;
      height: 2.375rem;

      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      border-radius: 0.375rem;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme['yellow']};
        color: ${(props) => props.theme['yellow-light']};
      }

      div {
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        width: 1.25rem;
        height: 1.25rem;
        
        position: absolute;
        right: -0.5rem;
        border-radius: 999px;
        top: -0.5rem;  
      }
    }

    div {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      border-radius: 0.375rem;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple']};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`
