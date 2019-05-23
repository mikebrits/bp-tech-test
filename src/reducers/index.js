import { combineReducers } from 'redux';
import processes from './Processes.reducer';
import general from './general.reducer';

export default combineReducers({ processes, general });
