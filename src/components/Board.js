import React from 'react';
import Task from './Task';

class Board extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.renderTask = this.renderTask.bind(this);
    }
    onDragOver(event) {
        event.preventDefault();
        return false;
    }
    onDrop(event) {
        const taskId = parseInt(event.dataTransfer.getData('taskId'), 10);
        this.props.moveTask(taskId, this.props.board.id);
    }
    renderTask(task) {
        return <Task key={task.id} task={task} />;
    }
    render() {
        const {board} = this.props;
        return (
            <div>
                <h3 className="center">{board.name} ({board.tasks.length})</h3>
                <div className="board" onDragOver={this.onDragOver} onDrop={this.onDrop}>
                    {board.tasks.map(this.renderTask)}
                </div>
            </div>
        );
    }
}

export default Board;
