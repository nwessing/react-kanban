import * as types from './actionTypes';

export function moveTask(taskId, boardId) {
    return {
        type: types.MOVE_TASK,
        taskId,
        boardId
    };
}
