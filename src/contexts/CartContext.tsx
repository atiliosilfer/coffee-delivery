import { ReactNode, createContext, useEffect, useState } from 'react'

interface Order {
  id: number
  description: string
  amount: number
  unitValue: number
}

interface CartContextType {
  cartItens: Order[]
  addCartItem: (order: Order) => void
  removeCartItem: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItens, setCartItens] = useState<Order[]>([])

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItens)

    localStorage.setItem('@coffee-delivery:cart-itens-1.0.0', stateJSON)
  }, [cartItens])

  function addCartItem(newCoffeeOrder: Order) {
    const orderIndex = cartItens.findIndex(
      (order) => order.id === newCoffeeOrder.id,
    )

    if (orderIndex >= 0) {
      const newCartItens = cartItens
      newCartItens[orderIndex].amount += newCoffeeOrder.amount

      setCartItens(newCartItens)
      return
    }

    setCartItens([...cartItens, newCoffeeOrder])
  }

  function removeCartItem(coffeeId: number) {
    const filteredOrders = cartItens.filter((item) => item.id !== coffeeId)

    setCartItens(filteredOrders)
  }

  return (
    <CartContext.Provider
      value={{
        cartItens,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
