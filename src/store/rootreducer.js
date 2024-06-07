import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import loginReducer from '../features/loginSlice';
import authReducer from '../features/tokenSlice'

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  auth: authReducer
});

export default rootReducer;
