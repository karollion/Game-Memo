import { RootState } from './store';
import { Score } from './scoreRedux';
export interface UserState {
    user: User | null;
}
export interface User {
    id: string;
    email: string;
    role: Role;
    name: string;
    password?: Password;
    score: Score[];
}
interface Password {
    id: string;
    hashedPassword: string;
    user: User;
    userId: string;
}
declare enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}
export declare const logIn: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "user/logIn">, logOut: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"user/logOut">;
export declare const isUserLoginedIn: () => (dispatch: any) => Promise<void>;
export declare const selectUser: (state: RootState) => User;
declare const _default: import("redux").Reducer<UserState>;
export default _default;
