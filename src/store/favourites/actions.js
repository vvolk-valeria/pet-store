import { ADD_FAVOURITES, REMOVE_FAVOURITES } from './types'

export const addToFavourites = (id) => {
  return {
    type: ADD_FAVOURITES,
    payload: id,
  }
}

export const removeFavourites = (id) => {
  return {
    type: REMOVE_FAVOURITES,
    payload: id,
  }
}
