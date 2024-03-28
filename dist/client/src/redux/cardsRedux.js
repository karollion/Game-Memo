"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAllCards = exports.shuffleCards = exports.editCard = exports.loadCards = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const shuffle_1 = require("../utils/shuffle");
const sampleCards = [
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
const cardsSlice = (0, toolkit_1.createSlice)({
    name: 'cards',
    initialState: {
        cards: sampleCards,
        isShuffled: false,
    },
    reducers: {
        loadCards: (state, action) => {
            state.cards = action.payload;
        },
        editCard: (state, action) => {
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
                state.cards = (0, shuffle_1.default)([...state.cards]);
                state.isShuffled = true;
            }
        },
    },
});
_a = cardsSlice.actions, exports.loadCards = _a.loadCards, exports.editCard = _a.editCard, exports.shuffleCards = _a.shuffleCards;
const selectAllCards = (state) => state.cards.cards;
exports.selectAllCards = selectAllCards;
exports.default = cardsSlice.reducer;
//# sourceMappingURL=cardsRedux.js.map