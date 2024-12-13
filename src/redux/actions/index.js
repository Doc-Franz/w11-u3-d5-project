export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const addToPlayer = (song) => ({ type: ADD_TO_PLAYER, payload: song });
export const addToFavourites = (song) => ({ type: ADD_TO_FAVOURITES, payload: song });
export const removeFromFavourites = (index) => ({ type: REMOVE_FROM_FAVOURITES, payload: index });
