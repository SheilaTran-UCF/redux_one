import {combineReducers} from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';
import planReducer from './planReducer';

// add comment

export default combineReducers({
  auth: authReducer,
  movies: movieReducer,
  plans: planReducer,
});
