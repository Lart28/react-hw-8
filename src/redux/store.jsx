import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { userReducer } from './userSlice';
import { contactsReducer } from './contactSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    user: persistReducer(authPersistConfig, userReducer),
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
