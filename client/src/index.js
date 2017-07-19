import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';

//creates a store look at reducers (reducers are pretty much smaller sets of storage), look into reducer files and its example
const middleware = applyMiddleware();

const store = createStore(allReducers, middleware);

store.subscribe (() => {
  console.log('---store changed', store.getState());
})

ReactDOM.render(
  //Provicer allows App and its children components to have access to all the storage
  <Provider store = {store}>
    <App/>
  </Provider>, document.getElementById('root')
);


export default store;
