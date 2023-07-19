import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { DeliveryFormData } from '../pages/Checkout'
import { Order, OrderReducer } from '../reducers/delivery/reducer'
import {
  addCartItemAction,
  changeCartItemAmountAction,
  clearCartAction,
  removeCartItemAction,
  updateDeliveryFormDataAction,
} from '../reducers/delivery/actions'

interface OrderContextType {
  cartItens: Order[]
  addCartItem: (order: Order) => void
  changeCartItemAmount: (order: Order) => void
  removeCartItem: (id: number) => void
  clearCart: () => void
  totalOrderValue: number
  deliveryFormData: DeliveryFormData
  updateDeliveryFormData: (data: DeliveryFormData) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [totalOrderValue, setTotalOrderValue] = useState(0)
  const [deliveryState, dispatch] = useReducer(
    OrderReducer,
    {
      cartItens: [],
      totalOrderValue: 0,
      deliveryFormData: {
        cep: '',
      },
    },
    (inicialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:delivery-state-1.0.0',
      )

      if (storedStateAsJSON) {
        const storageState = JSON.parse(storedStateAsJSON)

        return storageState
      }

      return inicialState
    },
  )

  const { cartItens, deliveryFormData } = deliveryState

  useEffect(() => {
    const stateJSON = JSON.stringify(deliveryState)

    localStorage.setItem('@coffee-delivery:delivery-state-1.0.0', stateJSON)
    setTotalOrderValue(sumOrderValue(deliveryState.cartItens))
  }, [deliveryState])

  function sumOrderValue(cart: Order[]) {
    return cart.reduce(
      (accumulator, item) => accumulator + item.amount * item.unitValue,
      0,
    )
  }

  function updateDeliveryFormData(data: DeliveryFormData) {
    dispatch(updateDeliveryFormDataAction(data))
  }

  function addCartItem(coffeeOrder: Order) {
    dispatch(addCartItemAction(coffeeOrder))
  }

  function changeCartItemAmount(coffeeOrder: Order) {
    dispatch(changeCartItemAmountAction(coffeeOrder))
  }

  function removeCartItem(coffeeId: number) {
    dispatch(removeCartItemAction(coffeeId))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <OrderContext.Provider
      value={{
        cartItens,
        addCartItem,
        changeCartItemAmount,
        removeCartItem,
        clearCart,
        deliveryFormData,
        updateDeliveryFormData,
        totalOrderValue,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
