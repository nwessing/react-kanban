import React from 'react';

class AddTaskForm extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            taskName: ''
        };

        this.addTask = this.addTask.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    addTask(event) {
        event.preventDefault();
        this.props.addTask({
            title: this.state.taskName,
            boardId: this.props.boardId
        });
        this.setState({ taskName: '' });
    }
    onChange(event) {
        this.setState({ taskName: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.addTask}>
                <input type="text"
                    required
                    placeholder="Task Name"
                    value={this.state.taskName}
                    onChange={this.onChange} />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default AddTaskForm;
