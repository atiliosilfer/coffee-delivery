import { ReactNode, createContext, useEffect, useState } from 'react'
import { DeliveryFormData } from '../pages/Checkout'

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
  clearCart: () => void
  totalOrderValue: number
  deliveryData: DeliveryFormData
  updateDeliveryData: (data: DeliveryFormData) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const storedCartAsJSON = localStorage.getItem(
    '@coffee-delivery:cart-itens-1.0.0',
  )
  const storedDeliveryDataAsJSON = localStorage.getItem(
    '@coffee-delivery:delivery-data-1.0.0',
  )

  const [cartItens, setCartItens] = useState<Order[]>(
    storedCartAsJSON ? JSON.parse(storedCartAsJSON) : [],
  )
  const [deliveryData, setDeliveryData] = useState<DeliveryFormData>(
    storedDeliveryDataAsJSON ? JSON.parse(storedDeliveryDataAsJSON) : [],
  )
  const [totalOrderValue, setTotalOrderValue] = useState(
    sumOrderValue(cartItens),
  )

  useEffect(() => {
    saveCartOnLocalStorage(cartItens)
    setTotalOrderValue(sumOrderValue(cartItens))
  }, [cartItens])

  function updateDeliveryData(data: DeliveryFormData) {
    setDeliveryData(data)

    const stateJSON = JSON.stringify(data)
    localStorage.setItem('@coffee-delivery:delivery-data-1.0.0', stateJSON)
  }

  function addCartItem(newCoffeeOrder: Order) {
    const orderIndex = cartItens.findIndex(
      (order) => order.id === newCoffeeOrder.id,
    )

    if (orderIndex >= 0) {
      const newCartItens = cartItens
      newCartItens[orderIndex].amount = newCoffeeOrder.amount

      setCartItens(newCartItens)
      saveCartOnLocalStorage(newCartItens)
      setTotalOrderValue(sumOrderValue(newCartItens))
      return
    }

    setCartItens([...cartItens, newCoffeeOrder])
  }

  function removeCartItem(coffeeId: number) {
    const filteredOrders = cartItens.filter((item) => item.id !== coffeeId)

    setCartItens(filteredOrders)
  }

  function clearCart() {
    setCartItens([])
  }

  function saveCartOnLocalStorage(cart: Order[]) {
    const stateJSON = JSON.stringify(cart)

    localStorage.setItem('@coffee-delivery:cart-itens-1.0.0', stateJSON)
  }

  function sumOrderValue(cart: Order[]) {
    return cart.reduce(
      (accumulator, item) => accumulator + item.amount * item.unitValue,
      0,
    )
  }

  return (
    <OrderContext.Provider
      value={{
        cartItens,
        addCartItem,
        removeCartItem,
        clearCart,
        totalOrderValue,
        deliveryData,
        updateDeliveryData,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
