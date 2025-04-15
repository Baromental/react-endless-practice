import { createStore } from 'redux';
import { phonebookReducer } from './phonebook/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(phonebookReducer, composeWithDevTools());
