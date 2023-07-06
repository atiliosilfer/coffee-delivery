import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import coffeImage from '../../assets/coffees/expresso-americano.png'
import { OrderCounterForm } from '../../components/OrderCounterForm'
import {
  CardContainer,
  GridContainer,
  PaymentOption,
  PaymentOptionContainer,
  CardTitle,
  FormGrid,
  FormGridItem,
} from './styles'

export function Checkout() {
  return (
    <GridContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <CardContainer>
          <CardTitle colorIcon="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <h4>Informe o endereço onde deseja receber seu pedido</h4>
            </div>
          </CardTitle>

          <FormGrid>
            <FormGridItem startColumn={1} columnSize={4}>
              <input type="text" placeholder="CEP" />
            </FormGridItem>
            <FormGridItem startColumn={1} columnSize={12}>
              <input type="text" placeholder="Rua" />
            </FormGridItem>
            <FormGridItem startColumn={1} columnSize={4}>
              <input type="number" placeholder="Número" />
            </FormGridItem>
            <FormGridItem startColumn={5} columnSize={8}>
              <input type="text" placeholder="Complemento" />
            </FormGridItem>
            <FormGridItem startColumn={1} columnSize={4}>
              <input type="text" placeholder="Bairro" />
            </FormGridItem>
            <FormGridItem startColumn={5} columnSize={6}>
              <input type="text" placeholder="Cidade" />
            </FormGridItem>
            <FormGridItem startColumn={11} columnSize={2}>
              <input type="text" placeholder="UF" />
            </FormGridItem>
          </FormGrid>
        </CardContainer>

        <CardContainer>
          <CardTitle colorIcon="purple">
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <h4>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </h4>
            </div>
          </CardTitle>

          <PaymentOptionContainer>
            <PaymentOption>
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </PaymentOption>
            <PaymentOption selected={true}>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </PaymentOption>
            <PaymentOption>
              <Money size={16} />
              DINHEIRO
            </PaymentOption>
          </PaymentOptionContainer>
        </CardContainer>
      </div>

      <div>
        <h2>Cafés selecionados</h2>

        <CardContainer>
          <div>
            <div>
              <img src={coffeImage} alt="imagem de cafe" />
            </div>
            <div>
              <span>Expresso Tradicional</span>
              <OrderCounterForm amount={1} onClick={() => console.log('aaa')} />
              <button type="button">
                <Trash size={32} />
                Remover
              </button>
            </div>
            <div>
              <span>R$ 9,90</span>
            </div>
          </div>

          <div>
            <span>Total de itens: R$ 29,70</span>
            <span>Entrega: R$ 3,50</span>
            <span>Total: R$ 33,20</span>
          </div>

          <button type="submit">confirmar pedido</button>
        </CardContainer>
      </div>
    </GridContainer>
  )
}
