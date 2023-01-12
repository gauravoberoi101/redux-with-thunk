import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode> // uing React.StrictMode causes API's to render 2 times, so i commented it
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
	</Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


