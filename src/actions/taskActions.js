import * as types from './actionTypes';

export function moveTask(taskId, boardId) {
    return {
        type: types.MOVE_TASK,
        taskId,
        boardId
    };
}

export function addTask(task) {
    return {
        type: types.ADD_TASK,
        task: Object.assign({}, task)
    };
}

export function removeTask(taskId) {
    return {
        type: types.REMOVE_TASK,
        taskId
    };
}
