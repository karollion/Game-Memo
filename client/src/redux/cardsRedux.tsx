import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import shuffle from '../utils/shuffle';

export interface Card {
  id: number;
  name: string;
  image: string;
  isFlipped: boolean;
}

const sampleCards: Card[] = [
  { id: 1, name: 'Card 1', image: '0', isFlipped: true },
  { id: 2, name: 'Card 2', image: '1', isFlipped: true },
  { id: 3, name: 'Card 3', image: '2', isFlipped: true },
  { id: 4, name: 'Card 4', image: '3', isFlipped: true },
  { id: 5, name: 'Card 5', image: '4', isFlipped: true },
  { id: 6, name: 'Card 6', image: '5', isFlipped: true },
  { id: 7, name: 'Card 7', image: '6', isFlipped: true },
  { id: 8, name: 'Card 8', image: '7', isFlipped: true },
  { id: 9, name: 'Card 9', image: '0', isFlipped: true },
  { id: 10, name: 'Card 10', image: '1', isFlipped: true },
  { id: 11, name: 'Card 11', image: '2', isFlipped: true },
  { id: 12, name: 'Card 12', image: '3', isFlipped: true },
  { id: 13, name: 'Card 13', image: '4', isFlipped: true },
  { id: 14, name: 'Card 14', image: '5', isFlipped: true },
  { id: 15, name: 'Card 15', image: '6', isFlipped: true },
  { id: 16, name: 'Card 16', image: '7', isFlipped: true },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState:  {
    cards: sampleCards,
    isShuffled: false,
  },
  reducers: {
    loadCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    editCard: (state, action: PayloadAction<Card>) => {
      const { id, name, image, isFlipped } = action.payload;
      const editedCard = state.cards.find((card) => card.id === id);

      if (editedCard) {
        editedCard.name = name;
        editedCard.image = image;
        editedCard.isFlipped = isFlipped;
      }
    },
    shuffleCards: (state) => {
      if (!state.isShuffled) {
        state.cards = shuffle([...state.cards]);
        state.isShuffled = true;
      }
    },
  },
});

export const { loadCards, editCard, shuffleCards } = cardsSlice.actions;

// selectors
export const selectAllCards = (state: RootState) => state.cards.cards;

export default cardsSlice.reducer;