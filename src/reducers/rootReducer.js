import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    boards: boardReducer,
    tasks: taskReducer
});
