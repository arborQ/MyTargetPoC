import { createStore } from 'redux';
import productReducer from './productReducer';

export default createStore(productReducer);
