import { combineReducers, configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/PlayerReducer";

const reducerStore = combineReducers({
  player: playerReducer
});

const store = configureStore({
  reducer: reducerStore
});

export default store;
