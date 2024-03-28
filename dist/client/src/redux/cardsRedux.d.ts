import { RootState } from './store';
export interface Card {
    id: number;
    name: string;
    image: string;
    isFlipped: boolean;
}
export declare const loadCards: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Card[], "cards/loadCards">, editCard: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Card, "cards/editCard">, shuffleCards: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cards/shuffleCards">;
export declare const selectAllCards: (state: RootState) => Card[];
declare const _default: import("redux").Reducer<{
    cards: Card[];
    isShuffled: boolean;
}>;
export default _default;
