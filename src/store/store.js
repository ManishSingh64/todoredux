
import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';

import {todoReducer} from './todo.reducer'
import {authReducer} from './login.reducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    auth: authReducer 
})


export const store = legacy_createStore(rootReducer)