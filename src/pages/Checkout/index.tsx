import { BillContainer, CardContainer, GridContainer } from './styles'
import { FormCheckout } from './components/FormCheckout'
import { CardItem } from './components/CardItem'

export function Checkout() {
  return (
    <GridContainer>
      <FormCheckout />

      <div>
        <h2>Cafés selecionados</h2>

        <CardContainer>
          <CardItem />
          <CardItem />

          <BillContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega </span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total </span>
              <span>R$ 33,20</span>
            </div>

            <button type="submit">CONFIRMAR PEDIDO</button>
          </BillContainer>
        </CardContainer>
      </div>
    </GridContainer>
  )
}
