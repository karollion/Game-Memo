"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsLoading = exports.selectAllScores = exports.fetchScores = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const config_1 = require("../config");
const initialState = {
    scores: [],
    isLoading: false,
};
exports.fetchScores = (0, toolkit_1.createAsyncThunk)('scores/fetchScores', async () => {
    const response = await fetch(`${config_1.API_URL}/scores`);
    return response.json();
});
const scoresSlice = (0, toolkit_1.createSlice)({
    name: 'AllScores',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(exports.fetchScores.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(exports.fetchScores.fulfilled, (state, action) => {
            state.scores = action.payload;
            state.isLoading = false;
        });
        builder.addCase(exports.fetchScores.rejected, (state) => {
            state.isLoading = false;
        });
    },
});
const selectAllScores = (state) => state.AllScores.scores;
exports.selectAllScores = selectAllScores;
const selectIsLoading = (state) => state.AllScores.isLoading;
exports.selectIsLoading = selectIsLoading;
exports.default = scoresSlice.reducer;
//# sourceMappingURL=scoreRedux.js.map