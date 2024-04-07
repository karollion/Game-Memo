"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectIsLoading = exports.selectAllScores = exports.addScoreOnServer = exports.fetchScores = void 0;
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
exports.addScoreOnServer = (0, toolkit_1.createAsyncThunk)('scores/addScoreOnServer', async (scoreData, { dispatch }) => {
    try {
        const response = await fetch(`${config_1.API_URL}/scores`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(scoreData),
        });
        if (response.status === 200) {
            console.log('Success add score');
        }
        else {
            console.log('Something wrong');
        }
    }
    catch (error) {
        console.error('Error while adding score:', error);
    }
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
        builder.addCase(exports.addScoreOnServer.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(exports.addScoreOnServer.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(exports.addScoreOnServer.rejected, (state) => {
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