import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import loginReducer from '../features/loginSlice';

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
});

export default rootReducer;
