import {combineReducers} from 'redux';
import CounterReducer from './countReducer';
import IsLoggedReducer from './isLoggedReducer';

const allReducers=combineReducers({
    count:CounterReducer,
    isLogged:IsLoggedReducer
})
 
export default allReducers;