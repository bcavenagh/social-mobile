import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import firebase from '../firebase';


//
// Initial State...
//
const initialState = {
    user: { },
}



// 
//Reducer...
// 
const reducer = (state = initialState, action) => {
    switch(action.type) { 
        case 'setUser':
            return { ...state, user: action.value};

        default: 
            return state;
    }
}


// 
// Store...
// 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export{ store };


// 
// Action Creators...
// 
const setUser = (user) => {
    return {
        type: 'setUser',
        value: user
    };
};

const watchUsers = () => {
    return function(dispatch) {
        firebase.database().ref('users').on('value', function(snapshot){
            var user = snapshot.val();
            var actionSetUser = setUser(user);
            dispatch(actionSetUser);
        }, function(error){ console.log(error); });
    }
};

export { setUser, watchUsers };