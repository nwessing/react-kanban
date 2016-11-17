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
        case types.ADD_TASK:
            const id = state.reduce((result, task) => task.id >= result ? task.id + 1 : result, 0);
            const newTask = Object.assign({}, action.task, {id});
            return [
                ...state,
                newTask
            ];
        case types.REMOVE_TASK:
            const index = state.findIndex(task => task.id === action.taskId);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        default:
            return state;
    }
}
