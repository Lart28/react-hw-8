import { createSlice } from '@reduxjs/toolkit';
import { signUp, logOut, logIn, fetchCurrentUser } from './userOperations';

const handleRejected = (state, action) => {
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null, password: null },
    isLoggedIn: false,
    token: null,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, handleRejected)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
