// Types
interface Card {
  id: number;
  name: string;
}

interface Score {
  name: string;
  numberOfCards: number;
  time: string;
  wynik: number;
}

interface CardsState {
  cards: Card[];
  faceDownCards: Card[];
  scores: Score[];
}

const initialState: CardsState = {
  cards: [],
  faceDownCards: [],
  scores: [],
};

export default initialState;