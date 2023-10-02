const initialState = {
  currentId: null,
}

export const currentIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ARTICUL':
      return {
        currentId: action.payload,
      }

    default: {
      return state
    }
  }
}
