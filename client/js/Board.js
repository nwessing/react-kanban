var React = require('react');
var Task = require('./Task');

var Board = React.createClass({
    render: function () {
        var tasks = this.props.tasks.map(function (task) {
            return (
                <Task>{task.title}</Task>
            );
        });
        return (
            <div>            
                <h3 className="center">{this.props.name}</h3>
                <div className="board">
                    {tasks}
                </div>
            </div>
        );
    }
});

module.exports = Board;