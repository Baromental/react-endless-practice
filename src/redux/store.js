import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook/reducers';

export const store = configureStore({
  reducer: { phonebookReducer },
  devTools: process.env.NODE_ENV !== 'production',
});
