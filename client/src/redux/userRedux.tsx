import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { API_URL } from '../config';
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

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

// Thunk action to check if the user is logged in
export const isUserLoginedIn = () => async (dispatch: any) => {
  try {
    const response = await fetch(`${API_URL}/auth/users`);
    const data = await response.json();
    if (response.status === 200) {
      dispatch(logIn(data.user));
    } else {
      console.log('No user logged in');
    }
  } catch (error) {
    console.error('Error while checking user login status:', error);
  }
};

// selectors
 export const selectUser = (state: RootState) => state.user.user;


export default userSlice.reducer;