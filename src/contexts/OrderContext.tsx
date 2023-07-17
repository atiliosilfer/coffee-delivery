import { ReactNode, createContext, useEffect, useState } from 'react'

export interface Order {
  id: number
  name: string
  amount: number
  unitValue: number
  image: string
}

interface OrderContextType {
  cartItens: Order[]
  addCartItem: (order: Order) => void
  removeCartItem: (id: number) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const storedStateAsJSON = localStorage.getItem(
    '@coffee-delivery:cart-itens-1.0.0',
  )

  const [cartItens, setCartItens] = useState<Order[]>(
    storedStateAsJSON ? JSON.parse(storedStateAsJSON) : [],
  )

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
    <OrderContext.Provider
      value={{
        cartItens,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
