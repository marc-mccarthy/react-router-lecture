import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const sendAnimals = (state = "Gopher", action) => {
    if (action.type === 'SEND_ANIMAL') {
        state = action.payload;
    }
    return state;
}

const sendPlants = (state = "Bonzai Tree", action) => {
    if (action.type === 'SEND_PLANT') {
        state = action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        sendAnimals,
        sendPlants,
    })
)

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
