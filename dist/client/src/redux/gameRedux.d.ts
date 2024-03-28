import { RootState } from './store';
export declare const incNumberOfClicks: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"game/incNumberOfClicks">, resNumberOfClicks: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"game/resNumberOfClicks">, toggleSounds: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"game/toggleSounds">;
export declare const selectNumberOfClicks: (state: RootState) => number;
export declare const selectGameSoundsToggle: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<{
    numberOfClicks: number;
    gameSounds: boolean;
}>;
export default _default;
