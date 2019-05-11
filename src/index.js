import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

// Redux stuff import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


class Index extends Component {
    state = {
        feedback: {
            feelings: '',
            understanding: '',
            support: '',
            comments: ''
        }
    }
}

// Feedback reducer. Being called from each step in the feedback form
const feedbackReducer = (state={}, action) => {
   if (action.type === `SET_FEELINGS`){
       console.log('made it to feedback reducer in setfeelings');
       return [state, action.payload]
    }
   else if (action.type === `SET_UNDERSTANDING`) {
       console.log('made it to feedbackReducer in understanding');
       return [state, action.payload]
   }
   else if (action.type === `SET_SUPPORT`){
       console.log('made it to feedbackReducer in support');
       return [state, action.payload]
   }
   else if (action.type === `SET_COMMENTS`) {
        console.log('made it to feedbackReducer in comments');
        return [state, action.payload]
   } 
   else{  
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

export default Index;

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
