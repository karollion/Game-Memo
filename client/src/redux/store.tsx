import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsRedux';
import gameReducer from './gameRedux';
import scoresReducer from './scoreRedux';
import userReducer, { UserState } from './userRedux'; // eslint-disable-line

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    game: gameReducer,
    AllScores: scoresReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch