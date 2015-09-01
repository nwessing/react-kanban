var React = require('react');
var KanbanBoard = require('./KanbanBoard');

var tasks = [
    { title: "Allow the user to create new tasks." },
    { title: "Show number of tasks on each board next to board title." },
    { title: "Add a trash can drop area where tasks can be discarded." },
    { title: "Add a progress bar showing how many tasks are complete over total tasks." }
];
React.render(
    <KanbanBoard tasks={tasks} />,
    document.getElementById('content')
);