import { RootState } from './store';
import { User } from './userRedux';
export interface Score {
    id?: string;
    points: number;
    cards: number;
    moves: number;
    time: number;
    winAt?: Date;
    user?: User;
    userId: string;
}
export interface ScoresState {
    scores: Score[];
    isLoading: boolean;
}
export declare const fetchScores: import("@reduxjs/toolkit").AsyncThunk<any, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const addScoreOnServer: import("@reduxjs/toolkit").AsyncThunk<void, Score, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const selectAllScores: (state: RootState) => Score[];
export declare const selectIsLoading: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<ScoresState>;
export default _default;
