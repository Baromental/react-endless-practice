import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, registerThunk } from './operation';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  loading: false,
  error: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
