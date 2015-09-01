var React = require('react');
var Task = React.createClass({
    render: function () {
        return (
            <div className="task">{this.props.children.toString()}</div>
        );
    }
});

module.exports = Task;