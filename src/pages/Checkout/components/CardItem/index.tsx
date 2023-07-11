import { OrderCounterForm } from '../../../../components/OrderCounterForm'
import { CardItemContainer } from './styles'
import coffeImage from '../../../../assets/coffees/expresso-gelado.png'
import { Trash } from 'phosphor-react'

export function CardItem() {
  return (
    <CardItemContainer>
      <img src={coffeImage} alt="imagem de cafe" />

      <div>
        <span>Expresso Tradicional</span>

        <OrderCounterForm amount={1} onClick={() => console.log('aaa')} />
        <button type="button">
          <Trash size={16} />
          REMOVER
        </button>
      </div>

      <span>R$ 9,90</span>
    </CardItemContainer>
  )
}
