import { createStore } from 'redux';
import { phonebookReducer } from './phonebook/reducers';

export const store = createStore(
  phonebookReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
