import { RootState } from './store';
export interface Score {
    id: string;
    points: number;
    cards: number;
    moves: number;
    time: number;
    winAt: Date;
    user: User;
    userId: string;
}
interface User {
    id: string;
    name: string;
    avatar?: string;
    score: Score[];
}
export interface ScoresState {
    scores: Score[];
    isLoading: boolean;
}
export declare const fetchScores: import("@reduxjs/toolkit").AsyncThunk<any, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const selectAllScores: (state: RootState) => Score[];
export declare const selectIsLoading: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<ScoresState>;
export default _default;
