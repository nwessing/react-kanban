import React from 'react';

function onDragStart(event) {
    event.dataTransfer.setData('taskId', event.target.dataset.id);
}

const Task = ({task}) => {
    return (
        <div className="task" draggable="true" onDragStart={onDragStart} data-id={task.id}>{task.title}</div>
    );
};

export default Task;
