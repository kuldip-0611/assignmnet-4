import {configureStore} from '@reduxjs/toolkit'
import incredecreItemReducer from '../features/incrementItem/incrementItemSlice'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = configureStore({
   reducer:{
    incrementItem: incredecreItemReducer
   },
   
})
export default store