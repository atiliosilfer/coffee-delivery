import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    margin-top: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
  }

  > div {
    display: grid;
    grid-template-columns: 45% auto;
    gap: 3rem;
    -webkit-box-align: center;
    align-items: center;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`

export const OrderResumeContainer = styled.div`
  border-radius: 0.375rem 2.25rem;
  padding: 1px;
  background: linear-gradient(to right, rgb(219, 172, 44), rgb(128, 71, 248));

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;
    background-color: ${(props) => props.theme.background};
    border-radius: 0.375rem 2.25rem;
  }
`

export const OrderResumeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconContainerProps {
  color: 'purple' | 'yellow' | 'yellow-dark'
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.theme[props.color]};
  border-radius: 999px;
`
