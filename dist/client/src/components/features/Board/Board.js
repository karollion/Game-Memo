"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Board_module_scss_1 = require("./Board.module.scss");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const cardsRedux_1 = require("../../../redux/cardsRedux");
const react_redux_2 = require("react-redux");
const gameRedux_1 = require("../../../redux/gameRedux");
const GameCard_1 = require("../GameCard/GameCard");
const ProgressBar_1 = require("../ProgressBar/ProgressBar");
const Board = ({ finishGame, startStopWatch }) => {
    const dispatch = (0, react_redux_2.useDispatch)();
    const [firstCard, setFirstCard] = (0, react_1.useState)(undefined);
    const [secondCard, setSecondCard] = (0, react_1.useState)(undefined);
    const [guessedCards, setGuessedCards] = (0, react_1.useState)([]);
    const cards = (0, react_redux_1.useSelector)(cardsRedux_1.selectAllCards);
    const numRows = Math.sqrt(cards.length);
    const numCols = cards.length / numRows;
    const addCards = (card) => {
        if (!firstCard) {
            setFirstCard(card);
            dispatch((0, cardsRedux_1.editCard)(Object.assign(Object.assign({}, card), { isFlipped: !card.isFlipped })));
        }
        else if (!secondCard && firstCard.id !== card.id) {
            setSecondCard(card);
            dispatch((0, cardsRedux_1.editCard)(Object.assign(Object.assign({}, card), { isFlipped: !card.isFlipped })));
        }
        dispatch((0, gameRedux_1.incNumberOfClicks)());
    };
    const compareCards = () => {
        if (firstCard && secondCard) {
            if (firstCard.image === secondCard.image) {
                setGuessedCards((cards) => [...cards, firstCard, secondCard]);
                setFirstCard(undefined);
                setSecondCard(undefined);
            }
            else {
                dispatch((0, cardsRedux_1.editCard)(Object.assign(Object.assign({}, firstCard), { isFlipped: true })));
                dispatch((0, cardsRedux_1.editCard)(Object.assign(Object.assign({}, secondCard), { isFlipped: true })));
                setFirstCard(undefined);
                setSecondCard(undefined);
            }
        }
        if (guessedCards.length === cards.length) {
            finishGame(cards.length);
        }
    };
    (0, react_1.useEffect)(() => {
        dispatch((0, cardsRedux_1.shuffleCards)());
    }, [dispatch]);
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            compareCards();
        }, 600);
    }, [firstCard, secondCard, guessedCards]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: Board_module_scss_1.default.root, children: [(0, jsx_runtime_1.jsx)(ProgressBar_1.default, { quantityCards: cards.length, guessedCards: guessedCards.length }), [...Array(numRows)].map((_, row) => ((0, jsx_runtime_1.jsx)("div", { className: Board_module_scss_1.default.row, children: [...Array(numCols)].map((_, col) => ((0, jsx_runtime_1.jsx)("div", { className: Board_module_scss_1.default.col, children: (0, jsx_runtime_1.jsx)(GameCard_1.default, { card: cards[row * numCols + col], action: addCards, startStopWatch: startStopWatch }) }, col))) }, row)))] }));
};
exports.default = Board;
//# sourceMappingURL=Board.js.map