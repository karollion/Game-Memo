"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const cardsRedux_1 = require("./cardsRedux");
const gameRedux_1 = require("./gameRedux");
const scoreRedux_1 = require("./scoreRedux");
const userRedux_1 = require("./userRedux");
const store = (0, toolkit_1.configureStore)({
    reducer: {
        cards: cardsRedux_1.default,
        game: gameRedux_1.default,
        AllScores: scoreRedux_1.default,
        user: userRedux_1.default,
    },
    devTools: process.env.NODE_ENV !== 'production',
});
exports.default = store;
//# sourceMappingURL=store.js.map