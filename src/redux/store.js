import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { phonebookReducer } from './phonebook/slice';

// const myMiddleware = store => next => action => {
//   next(action);
// };

export const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebook: phonebookReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
});
