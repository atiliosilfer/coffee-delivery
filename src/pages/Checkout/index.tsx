import { Trash } from 'phosphor-react'
import coffeImage from '../../assets/coffees/expresso-americano.png'
import { OrderCounterForm } from '../../components/OrderCounterForm'
import { CardContainer, GridContainer } from './styles'
import { FormCheckout } from './components/FormCheckout'

export function Checkout() {
  return (
    <GridContainer>
      <FormCheckout />

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
