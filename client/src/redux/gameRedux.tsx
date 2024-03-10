import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const gameSlice = createSlice({
  name: 'game',
  initialState:  {
    numberOfClicks: 0,
  },
  reducers: {
    incNumberOfClicks: (state) => {
      state.numberOfClicks++;
    },
    resNumberOfClicks: (state) => {
      state.numberOfClicks = 0;
    }
  },
});

export const { incNumberOfClicks, resNumberOfClicks } = gameSlice.actions;

// selectors
export const selectNumberOfClicks = (state: RootState) => state.game.numberOfClicks;

export default gameSlice.reducer;