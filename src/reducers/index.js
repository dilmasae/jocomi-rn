import { combineReducers } from 'redux';

import authReducer from './authReducer';

/*
 * REDUX PERSIST
 */
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native

const authReducerConfig = {
    key: 'auth',
    storage
}

export default combineReducers({
    authReducer: persistReducer(authReducerConfig, authReducer),
});
