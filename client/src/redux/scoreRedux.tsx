import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { API_URL } from '../config';
import { User } from './userRedux';

export interface Score {
  id?: string;
  points: number;
  cards: number;
  moves: number;
  time: number;
  winAt?: Date;
  user?: User;
  userId: string;
}

export interface ScoresState {
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

/**
 * Adds user score to the server.
 * @param score Obiect contain: 
                points: number;
                cards: number;
                moves: number;
                time: number;
                userId: string;
  @returns
 */

  export const addScoreOnServer = createAsyncThunk(
    'scores/addScoreOnServer',
    async (scoreData: Score, { dispatch }) => {
      try {
        const response = await fetch(`${API_URL}/scores`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(scoreData),
        });
  
        if (response.status === 200) {
          console.log('Success add score')
          //dispatch(showSuccessBar());
        } else {
          console.log('Something wrong')
        }
      } catch (error) {
        console.error('Error while adding score:', error);
      }
    }
  );

const scoresSlice = createSlice({
  name: 'AllScores',
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
    });
    builder.addCase(addScoreOnServer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addScoreOnServer.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addScoreOnServer.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const selectAllScores = (state: RootState) => state.AllScores.scores;
export const selectIsLoading = (state: RootState) => state.AllScores.isLoading;

export default scoresSlice.reducer;