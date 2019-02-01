import './settings.scss'
import 'normalize.css'
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './pages/AppRouter'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import createStore from './store'

const store = createStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



