export default {
    boards: [
        { id: 1, name: 'To Do'},
        { id: 2, name: 'In Progress'},
        { id: 3, name: 'Complete'}
    ],
    tasks: [
        { id: 1, boardId: 1, title: "Allow the user to create new tasks." },
        { id: 2, boardId: 1, title: "Show number of tasks on each board next to board title." },
        { id: 3, boardId: 1, title: "Add a trash can drop area where tasks can be discarded." },
        { id: 4, boardId: 1, title: "Add a progress bar showing how many tasks are complete over total tasks." }
    ]
};
