import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HeaderTopicsContainer,
  HomeHeaderContainer,
  HeaderTopic,
} from './styles'
import coffeImageHeader from '../../../../assets/header-coffe.png'

export function HomeHeader() {
  return (
    <HomeHeaderContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>

        <HeaderTopicsContainer>
          <HeaderTopic color={'yellow-dark'}>
            <div>
              <ShoppingCart size={16} weight="fill" />
            </div>
            <span>Compra simples e segura</span>
          </HeaderTopic>
          <HeaderTopic color={'base-text'}>
            <div>
              <Package size={16} weight="fill" />
            </div>
            <span>Embalagem mantém o café intacto</span>
          </HeaderTopic>
          <HeaderTopic color={'yellow'}>
            <div>
              <Timer size={16} weight="fill" />
            </div>
            <span>Entrega rápida e rastreada</span>
          </HeaderTopic>
          <HeaderTopic color={'purple'}>
            <div>
              <Coffee size={16} weight="fill" />
            </div>
            <span>O café chega fresquinho até você</span>
          </HeaderTopic>
        </HeaderTopicsContainer>
      </div>

      <img
        src={coffeImageHeader}
        alt="illustrative image with coffee cup and coffee beans"
      />
    </HomeHeaderContainer>
  )
}
