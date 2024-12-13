import { ADD_TO_PLAYER, REMOVE_FROM_FAVOURITES } from "../actions";
import { ADD_TO_FAVOURITES } from "../actions";

const initialState = {
  content: null,
  favouriteSongs: [],
  isFavourite: true
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return { ...state, content: action.payload };
    case ADD_TO_FAVOURITES:
      return { ...state, favouriteSongs: [...state.favouriteSongs, action.payload], isFavourite: true };
    case REMOVE_FROM_FAVOURITES:
      return { ...state, favouriteSongs: state.favouriteSongs.filter((_, i) => i !== action.payload), isFavourite: false };
    default:
      return state;
  }
};

export default playerReducer;
