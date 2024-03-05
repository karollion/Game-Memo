import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { createSelector } from 'reselect';

export interface Card {
  id: number;
  name: string;
  image: string;
  isFlipped: boolean;
}

interface CardsState {
  cards: Card[];
}

const sampleCards: Card[] = [
  { id: 1, name: 'Card 1', image: '0', isFlipped: false },
  { id: 2, name: 'Card 2', image: '1', isFlipped: false },
  { id: 3, name: 'Card 3', image: '2', isFlipped: false },
  { id: 4, name: 'Card 4', image: '3', isFlipped: false },
  { id: 5, name: 'Card 5', image: '4', isFlipped: false },
  { id: 6, name: 'Card 6', image: '5', isFlipped: false },
  { id: 7, name: 'Card 7', image: '6', isFlipped: false },
  { id: 8, name: 'Card 8', image: '7', isFlipped: false },
  { id: 9, name: 'Card 9', image: '0', isFlipped: false },
  { id: 10, name: 'Card 10', image: '1', isFlipped: false },
  { id: 11, name: 'Card 11', image: '2', isFlipped: false },
  { id: 12, name: 'Card 12', image: '3', isFlipped: false },
  { id: 13, name: 'Card 13', image: '4', isFlipped: false },
  { id: 14, name: 'Card 14', image: '5', isFlipped: false },
  { id: 15, name: 'Card 15', image: '6', isFlipped: false },
  { id: 16, name: 'Card 16', image: '7', isFlipped: false },
];

// Initial State
const initialState: CardsState = {
  cards: sampleCards,
};

function shuffle(array : Card[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
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
  },
});

export const { loadCards, editCard } = cardsSlice.actions;

// selectors
export const selectAllCards = (state: RootState) => state.cards.cards;

// export const selectShuffledCards = (state: RootState) => {
//   const cards = [...state.cards.cards]; // Create a copy of the cards array
//   return shuffle(cards);
// };

export const selectShuffledCards = createSelector(
  [selectAllCards],
  (cards) => shuffle([...cards])
);

export default cardsSlice.reducer;