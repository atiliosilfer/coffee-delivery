import { OrderCounterForm } from '../../../../components/OrderCounterForm'
import { CardItemContainer } from './styles'
import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Order } from '../../../../reducers/delivery/reducer'

interface CartItemProps {
  order: Order
}

export function CartItem({ order }: CartItemProps) {
  const { changeCartItemAmount, removeCartItem } = useContext(OrderContext)
  const { id, name, amount, unitValue, image } = order
  const [coffeAmount, setCoffeeAmount] = useState(amount)

  function handleChangeOrderAmount(newAmount: number) {
    setCoffeeAmount(newAmount)
    changeCartItemAmount({ ...order, amount: newAmount })
  }

  function handleRemoveCartItem() {
    removeCartItem(id)
  }

  return (
    <CardItemContainer>
      <img src={image} alt="imagem de cafe" />

      <div>
        <span>{name}</span>

        <OrderCounterForm
          amount={coffeAmount}
          onClick={handleChangeOrderAmount}
        />

        <button type="button" onClick={handleRemoveCartItem}>
          <Trash size={16} />
          REMOVER
        </button>
      </div>

      <span>
        R${' '}
        {(unitValue * coffeAmount).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
    </CardItemContainer>
  )
}
