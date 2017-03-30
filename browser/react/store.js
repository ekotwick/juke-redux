// STORE
// this holds our state; our state is what our reducer function delivers to us

import {createStore} from 'redux'; 
import reducer from './reducers/root-reducer';

export default createStore(reducer);