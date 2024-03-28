"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectGameSoundsToggle = exports.selectNumberOfClicks = exports.toggleSounds = exports.resNumberOfClicks = exports.incNumberOfClicks = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const gameSlice = (0, toolkit_1.createSlice)({
    name: 'game',
    initialState: {
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
_a = gameSlice.actions, exports.incNumberOfClicks = _a.incNumberOfClicks, exports.resNumberOfClicks = _a.resNumberOfClicks, exports.toggleSounds = _a.toggleSounds;
const selectNumberOfClicks = (state) => state.game.numberOfClicks;
exports.selectNumberOfClicks = selectNumberOfClicks;
const selectGameSoundsToggle = (state) => state.game.gameSounds;
exports.selectGameSoundsToggle = selectGameSoundsToggle;
exports.default = gameSlice.reducer;
//# sourceMappingURL=gameRedux.js.map