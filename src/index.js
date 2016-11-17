import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import KanbanBoard from './components/KanbanBoard';
import './styles.css';

const store = configureStore();

render(
    <Provider store={store}>
        <KanbanBoard />
    </Provider>,
    document.getElementById('app')
);
