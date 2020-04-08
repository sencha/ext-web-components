import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));


const initialState = {
    filter: null,
    hello: 'hi',
    text: 'initial'
};

function reducer(state = initialState, action) {

    switch(action.type) {
        // case FILTER_CHANGE:
        //     const { filter } = action;
        //     return { ...state, filter };
        default:
            return { ...state };
    }

}


let store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
