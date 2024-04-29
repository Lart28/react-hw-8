import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contactsAPI';

export const signUp = createAsyncThunk(
  'user/signup',
  async (user, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.signUp(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/login',
  async (user, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.logIn(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.logOut();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const persistedToken = state.user.token;

      if (persistedToken === null) {
        return rejectWithValue();
      }

      const response = await contactsAPI.refresh(persistedToken);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
