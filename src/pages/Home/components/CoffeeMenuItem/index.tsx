import { useContext, useState } from 'react'
import {
  CoffeChip,
  ContainerCoffeeChip,
  ContainerCoffeeMenuItem,
  ContainerFormCoffeeMenuItem,
} from './styles'
import { OrderCounterForm } from '../../../../components/OrderCounterForm'
import { ShoppingCart } from 'phosphor-react'
import { CoffeeMenuItemType } from '../../../../service/mocks/coffeMenu'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeMenuItemProps {
  menu: CoffeeMenuItemType
}

export function CoffeeMenuItem({ menu }: CoffeeMenuItemProps) {
  const { image, name, description, type, value, id } = menu
  const { addCartItem } = useContext(CartContext)
  const [amount, setAmount] = useState(1)

  function onClickChangeOrderAmount(newAmount: number) {
    setAmount(newAmount)
  }

  function handleAddOrder() {
    addCartItem({
      amount,
      description,
      id,
      unitValue: value,
    })
  }

  return (
    <ContainerCoffeeMenuItem>
      <img src={image} alt="imagem do café expresso tradicional" />

      <ContainerCoffeeChip>
        {type.map((coffeType) => (
          <CoffeChip key={coffeType}>{coffeType}</CoffeChip>
        ))}
      </ContainerCoffeeChip>

      <h5>{name}</h5>

      <label>{description}</label>

      <ContainerFormCoffeeMenuItem>
        <span>
          R$
          <strong>
            {value.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </span>

        <OrderCounterForm amount={amount} onClick={onClickChangeOrderAmount} />

        <button onClick={handleAddOrder}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </ContainerFormCoffeeMenuItem>
    </ContainerCoffeeMenuItem>
  )
}
