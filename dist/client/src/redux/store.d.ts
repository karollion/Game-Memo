import { UserState } from './userRedux';
declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    cards: {
        cards: import("./cardsRedux").Card[];
        isShuffled: boolean;
    };
    game: {
        numberOfClicks: number;
        gameSounds: boolean;
    };
    AllScores: import("./scoreRedux").ScoresState;
    user: UserState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        cards: {
            cards: import("./cardsRedux").Card[];
            isShuffled: boolean;
        };
        game: {
            numberOfClicks: number;
            gameSounds: boolean;
        };
        AllScores: import("./scoreRedux").ScoresState;
        user: UserState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
