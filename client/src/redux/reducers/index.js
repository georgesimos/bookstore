import { combineReducers } from 'redux';
import alert from './alert';
import books from './books';

export default combineReducers({ alert, books });
