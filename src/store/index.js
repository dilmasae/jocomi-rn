import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import allReducers from '../reducers';
import {persistStore} from 'redux-persist';

let store = createStore(allReducers, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);

export {
    store,
    persistor,
};
