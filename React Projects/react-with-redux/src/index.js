import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';  // Provider enable store feature to React Application
import reducer from './reducer';    // reducer function imported 
import {createStore} from 'redux';  // import createStore function from redux 
const myStore = createStore(reducer); // connect reducer function to store and 
                                      // assign to myStore variable.
                                
                                      //connect store ie myStore with provider tag 
                                      // to enable store feature to React Application
ReactDOM.render(
  <Provider store={myStore}>      
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
