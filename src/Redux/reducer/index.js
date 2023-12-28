import { combineReducers } from 'redux';
import { productreducer } from './productreducer';
import { selectedProductsReducer } from './productreducer';
 const reducers = combineReducers({
     allproducts: productreducer,
     product:selectedProductsReducer
 })
 export default reducers
 