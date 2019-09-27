import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//redux
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

const formReducer = (state=[],action)=>{

    switch(action.type){
        case 'SET_FORM_1':
            state = [...state,action.payload]
            console.log(state);
            return state
        case 'SET_FORM_2':
            state = [...state,action.payload]
            console.log(state);
            return state
        case 'SET_FORM_3':
            state = [...state,action.payload]
            console.log(state);
            return state
        case 'SET_FORM_4':
            state = [...state,action.payload]
            console.log(state);
            return state
        default:
            return state
    }
}

const storeInstance = createStore(
    combineReducers({
        formReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
