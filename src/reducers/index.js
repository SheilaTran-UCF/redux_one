import {combineReducers} from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';

// add comment

export default combineReducers({
  auth: authReducer,
  movies: movieReducer,
});
