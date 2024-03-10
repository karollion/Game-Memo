import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsRedux';
import gameReducer from './gameRedux';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    game: gameReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;