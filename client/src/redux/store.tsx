import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsRedux';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

export type RootState = ReturnType<typeof store.getState>;