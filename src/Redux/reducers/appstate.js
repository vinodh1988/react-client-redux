import {combineReducers} from 'redux';
import { loginReducer,resourceReducer } from './reducers';

export const appstate = combineReducers({
    login: loginReducer,
    resourcedata: resourceReducer
})