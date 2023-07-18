import { ShoppingCart } from 'phosphor-react'
import { EmptyCartContainer } from './styles'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <ShoppingCart size={100} weight="fill" />
      <h1> Seu carrinho esta vazio!</h1>
    </EmptyCartContainer>
  )
}
