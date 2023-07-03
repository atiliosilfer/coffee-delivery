import { HomeHeader } from './components/HomeHeader'
import {
  CoffeChip,
  CoffeeMenuTitle,
  ContainerCoffeeMenu,
  ContainerCoffeeMenuItem,
  ContainerFormCoffeeMenuItem,
} from './styles'
import TradicionalExpressImagem from '../../assets/traditional-espresso.png'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { OrderCounterForm } from '../../components/OrderCounterForm'

export function Home() {
  const [amount, setAmount] = useState(1)

  function onClickChangeOrderAmount(newAmount: number) {
    setAmount(newAmount)
  }

  return (
    <>
      <HomeHeader />

      <CoffeeMenuTitle>Nossos cafés</CoffeeMenuTitle>
      <ContainerCoffeeMenu>
        <ContainerCoffeeMenuItem>
          <img
            src={TradicionalExpressImagem}
            alt="imagem do café expresso tradicional"
          />

          <CoffeChip>Tradicional</CoffeChip>

          <h5>Expresso Tradicional</h5>

          <label>O tradicional café feito com água quente e grãos moídos</label>

          <ContainerFormCoffeeMenuItem>
            <span>
              R$ <strong>9,90</strong>
            </span>

            <OrderCounterForm
              amount={amount}
              onClick={onClickChangeOrderAmount}
            />

            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </ContainerFormCoffeeMenuItem>
        </ContainerCoffeeMenuItem>
      </ContainerCoffeeMenu>
    </>
  )
}
