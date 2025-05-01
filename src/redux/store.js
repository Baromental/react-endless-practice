import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebook/slice';

// const myMiddleware = store => next => action => {
//   next(action);
// };

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
});
