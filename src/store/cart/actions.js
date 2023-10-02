import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_ORDER,
  INCREASE_PRODUCT_QUANTITY,
  DECREASE_PRODUCT_QUANTITY,
} from './types'

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id,
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  }
}

export const checkoutOrder = () => {
  return {
    type: CHECKOUT_ORDER,
  }
}

export const increaseProductQuantity = (id) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    payload: id,
  }
}

export const decreaseProductQuantity = (id) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: id,
  }
}
