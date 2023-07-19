import { DeliveryFormData } from '../../pages/Checkout'
import { Order } from './reducer'

export enum ActionTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  CHANGE_CART_ITEM_AMOUNT = 'CHANGE_AMOUNT_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  CLEAR_CART = 'CLEAR_CART',
  UPDATE_DELIVERY_DATA = 'UPDATE_DELIVERY_DATA',
}

export function addCartItemAction(order: Order) {
  return {
    type: ActionTypes.ADD_CART_ITEM,
    payload: {
      order,
    },
  }
}

export function changeCartItemAmountAction(order: Order) {
  return {
    type: ActionTypes.CHANGE_CART_ITEM_AMOUNT,
    payload: {
      order,
    },
  }
}

export function removeCartItemAction(id: number) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: {
      id,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}

export function updateDeliveryFormDataAction(data: DeliveryFormData) {
  return {
    type: ActionTypes.UPDATE_DELIVERY_DATA,
    payload: {
      data,
    },
  }
}
