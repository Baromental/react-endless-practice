import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './constans';

export const removeContact = id => ({ type: REMOVE_CONTACT, payload: id });
export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
export const setFilter = value => ({ type: SET_FILTER, payload: value });
