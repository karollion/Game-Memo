import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: number;
  name: string;
}

interface CardsState {
  cards: Card[];
}

// Initial State
const initialState: CardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    loadCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
  },
});

export const { loadCards } = cardsSlice.actions;
export default cardsSlice.reducer;