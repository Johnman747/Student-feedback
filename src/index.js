import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//redux
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

const feedback = {
    form1:'',
    form2:'',
    form3:'',
    form4:''
}


const formReducer = (state=feedback,action)=>{
    switch(action.type){
        case 'SET_FORM_1':
            state.form1 = action.payload
            console.log(state);
            return state
        case 'SET_FORM_2':
            state.form2 = action.payload
            console.log(state);
            return state
        case 'SET_FORM_3':
            state.form3 = action.payload
            console.log(state);
            return state
        case 'SET_FORM_4':
            state.form4 = action.payload
            console.log(state);
            return state
        case 'SET_CLEAR':
            state = feedback
            console.log(state);
            return state;
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
