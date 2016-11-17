import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Board from './Board';
import AddTaskForm from './AddTaskForm';
import ProgressBar from './ProgressBar';
import Trash from './Trash';
import * as taskActions from '../actions/taskActions';

class KanbanBoard extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.renderBoard = this.renderBoard.bind(this);
    }
    renderBoard(board) {
        return (
            <div key={board.id} className="third">
                <Board board={board} moveTask={this.props.actions.moveTask} /> 
            </div>
        );
    }
    render() {
        const {boards} = this.props; 
        const addToBoardId = boards[0].id;
        const totalTasks = boards.reduce((result, board) => {
            return board.tasks.length + result;
        }, 0);
        const completedTasks= boards[boards.length -1].tasks.length;
        return (
            <div>
                <h2>React</h2>
                <div>
                    <div className="third">
                        <AddTaskForm addTask={this.props.actions.addTask} boardId={addToBoardId} />
                    </div>
                    <div className="third">
                        <ProgressBar total={totalTasks} complete={completedTasks} />
                    </div>
                    <div className="third">
                        <Trash removeTask={this.props.actions.removeTask} />
                    </div>
                </div>
                <div>
                    {boards.map(this.renderBoard)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        boards: state.boards.map(board => ({
            id: board.id,
            name: board.name,
            tasks: state.tasks.filter(task => task.boardId === board.id)
        }))
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);
