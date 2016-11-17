import React from 'react';

class Trash extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }
    onDragOver(event) {
        event.preventDefault();
        return false;
    }
    onDrop(event) {
        const taskId = parseInt(event.dataTransfer.getData('taskId'), 10);
        this.props.removeTask(taskId);
    }
    render() {
        return (
            <div className="trash" onDragOver={this.onDragOver} onDrop={this.onDrop}>
                Trash
            </div>
        );
    }
}

export default Trash;
