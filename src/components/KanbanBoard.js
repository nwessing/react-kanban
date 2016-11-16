import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Board from './Board';
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
        return (
            <div>
                {this.props.boards.map(this.renderBoard)}
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
