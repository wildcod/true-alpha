import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ErrorReducer from './errorReducer';
export default combineReducers({
   authStore: AuthReducer,
   errorStore: ErrorReducer
});