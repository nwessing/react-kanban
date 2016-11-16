import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import KanbanBoard from './components/KanbanBoard';
import './styles.css';

const tasks = [
    { title: "Allow the user to create new tasks." },
    { title: "Show number of tasks on each board next to board title." },
    { title: "Add a trash can drop area where tasks can be discarded." },
    { title: "Add a progress bar showing how many tasks are complete over total tasks." }
];

const store = configureStore();

render(
    <Provider store={store}>
        <KanbanBoard />
    </Provider>,
    document.getElementById('app')
);
