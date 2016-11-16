import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function taskReducer(state = initialState.tasks, action) {
    switch (action.type) {
        case types.MOVE_TASK:
            const updatedTask = Object.assign({}, state.find(task => task.id === action.taskId));
            updatedTask.boardId = action.boardId;
            return [
                ...state.filter(task => task.id !== action.taskId),
                updatedTask
            ];
        default:
            return state;
    }
}
