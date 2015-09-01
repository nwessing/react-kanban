var React = require('react');
var Board = require('./Board');

var KanbanBoard = React.createClass({
    render: function () {
        return (
            <div>>
                <div className="third">
                    <Board name="To Do" tasks={[]} className="third" />
                </div>
                <div className="third">
                    <Board name="In Progress" tasks={[]} className="third" />
                </div>
                <div className="third">
                    <Board name="Complete" tasks={[]} className="third" />
                </div>
            </div>
        );
    }
});

module.exports = KanbanBoard;