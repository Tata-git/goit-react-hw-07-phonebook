import { configureStore } from '@reduxjs/toolkit';
import { contactApi, contactsSlice } from './contactApi';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [contactsSlice.name]: contactsSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

