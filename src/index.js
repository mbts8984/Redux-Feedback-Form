import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux stuff import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

     const feedback = {
            feelings: 0,
            understanding: 0,
            support: 0,
            comments: ''
        }
    
// Feedback reducer. Being called from each step in the feedback form
const feedbackReducer = (state = feedback, action) => {
    switch (action.type) {
        case `SET_FEELINGS`:
            return {
                ...state,
                feelings: action.payload
            };
        case `SET_UNDERSTANDING`:
            return {
                ...state,
                understanding: action.payload
            };
        case `SET_SUPPORT`:
            return {
                ...state,
                support: action.payload
            };
        case `SET_COMMENTS`:
            return {
                ...state,
                comments: action.payload
            };
        default:
            return state;
    }
}



// create store and add middleware
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
);

//export default Index;

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
