import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import MotoboyIllustrator from '../../assets/Illustration.png'
import {
  IconContainer,
  OrderConfirmationContainer,
  OrderResumeContainer,
  OrderResumeItem,
} from './styles'

export function OrderConfirmation() {
  return (
    <OrderConfirmationContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>

      <div>
        <OrderResumeContainer>
          <div>
            <OrderResumeItem>
              <IconContainer color="purple">
                <MapPin size={16} weight="fill" color="white" />
              </IconContainer>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </OrderResumeItem>
            <OrderResumeItem>
              <IconContainer color="yellow">
                <Timer size={16} weight="fill" color="white" />
              </IconContainer>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </OrderResumeItem>
            <OrderResumeItem>
              <IconContainer color="yellow-dark">
                <CurrencyDollar size={16} color="white" />
              </IconContainer>

              <div>
                <p>Pagamento na entrega </p>
                <strong>Cartão de Crédito</strong>
              </div>
            </OrderResumeItem>
          </div>
        </OrderResumeContainer>

        <img
          src={MotoboyIllustrator}
          alt="image of a motoboy delivering coffee "
        />
      </div>
    </OrderConfirmationContainer>
  )
}
