import { OrderCounterForm } from '../../../../components/OrderCounterForm'
import { CardItemContainer } from './styles'
import coffeImage from '../../../../assets/coffees/expresso-gelado.png'
import { Trash } from 'phosphor-react'
import { useState } from 'react'

export function CardItem() {
  const [coffeAmount, setCoffeeAmount] = useState(0)

  function handleAChangeOrderAmount(newAmount: number) {
    setCoffeeAmount(newAmount)
  }

  return (
    <CardItemContainer>
      <img src={coffeImage} alt="imagem de cafe" />

      <div>
        <span>Expresso Tradicional</span>

        <OrderCounterForm
          amount={coffeAmount}
          onClick={handleAChangeOrderAmount}
        />

        <button type="button">
          <Trash size={16} />
          REMOVER
        </button>
      </div>

      <span>R$ 9,90</span>
    </CardItemContainer>
  )
}
