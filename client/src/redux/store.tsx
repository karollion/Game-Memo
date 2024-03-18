import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsRedux';
import gameReducer from './gameRedux';
import scoresReducer from './scoreRedux';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    game: gameReducer,
    scores: scoresReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;