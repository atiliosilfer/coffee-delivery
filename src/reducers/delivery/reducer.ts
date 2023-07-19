import { DeliveryFormData } from '../../pages/Checkout'
import { ActionTypes } from './actions'

export interface Order {
  id: number
  name: string
  amount: number
  unitValue: number
  image: string
}

interface OrderState {
  cartItens: Order[]
  deliveryFormData: DeliveryFormData
}

export function OrderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_CART_ITEM: {
      const { order } = action.payload

      const orderIndex = state.cartItens.findIndex(
        (item) => item.id === order.id,
      )

      if (orderIndex >= 0) {
        const newCartItens = state.cartItens

        newCartItens[orderIndex].amount += order.amount

        return {
          ...state,
          cartItens: newCartItens,
        }
      }

      return { ...state, cartItens: [...state.cartItens, order] }
    }
    case ActionTypes.CHANGE_CART_ITEM_AMOUNT: {
      const { order } = action.payload

      const orderIndex = state.cartItens.findIndex(
        (item) => item.id === order.id,
      )

      if (orderIndex >= 0) {
        const newCartItens = state.cartItens
        newCartItens[orderIndex].amount = order.amount

        return {
          ...state,
          cartItens: newCartItens,
        }
      }

      return state
    }
    case ActionTypes.REMOVE_CART_ITEM: {
      const filteredOrders = state.cartItens.filter(
        (item) => item.id !== action.payload.id,
      )

      return {
        ...state,
        cartItens: filteredOrders,
      }
    }
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItens: [],
      }
    case ActionTypes.UPDATE_DELIVERY_DATA:
      return {
        ...state,
        deliveryFormData: action.payload.data,
      }
    default:
      return state
  }
}
