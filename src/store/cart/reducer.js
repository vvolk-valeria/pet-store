export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const isInCart = state.some(({ id }) => {
        return id === action.payload.currentId ? true : false
      })
      return isInCart
        ? [...state]
        : [...state, { id: action.payload.currentId, count: 1 }]
    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload)
    case 'CHECKOUT_ORDER':
      return []
    case 'INCREASE_PRODUCT_QUANTITY':
      return state.map((item) => {
        return item.id === action.payload
          ? { id: item.id, count: (item.count += 1) }
          : item
      })
    case 'DECREASE_PRODUCT_QUANTITY':
      return state.map((item) => {
        if (item.count === 1) return item
        return item.id === action.payload
          ? { id: item.id, count: (item.count -= 1) }
          : item
      })
    default:
      return state
  }
}
