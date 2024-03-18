import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { API_URL } from '../config';

export interface Score {
  id: string;
  points: number;
  cards: number;
  moves: number;
  time: number;
  winAt: Date;
  user: User;
  userId: string;
}

interface User {
  id: string;
  name: string;
  avatar?: string;
  score: Score[];
}

interface ScoresState {
  scores: Score[];
  isLoading: boolean;
}

const initialState: ScoresState = {
  scores: [],
  isLoading: false,
};

export const fetchScores = createAsyncThunk(
  'scores/fetchScores',
  async () => {
    const response = await fetch(`${API_URL}/scores`);
    return response.json();
  }
);

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchScores.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchScores.fulfilled, (state, action) => {
      state.scores = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchScores.rejected, (state) => {
      state.isLoading = false;
      // Obsługa błędów
    });
  },
});

export const selectAllScores = (state: RootState) => state.scores.scores;
export const selectIsLoading = (state: RootState) => state.scores.isLoading;

export default scoresSlice.reducer;