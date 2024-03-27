import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const gameSlice = createSlice({
  name: 'game',
  initialState:  {
    numberOfClicks: 0,
    gameSounds: false,
  },
  reducers: {
    incNumberOfClicks: (state) => {
      state.numberOfClicks++;
    },
    resNumberOfClicks: (state) => {
      state.numberOfClicks = 0;
    },
    toggleSounds: (state) => {
      state.gameSounds = !state.gameSounds;
    }
  },
});

export const { incNumberOfClicks, resNumberOfClicks, toggleSounds } = gameSlice.actions;

// selectors
export const selectNumberOfClicks = (state: RootState) => state.game.numberOfClicks;
export const selectGameSoundsToggle = (state: RootState) => state.game.gameSounds;

export default gameSlice.reducer;