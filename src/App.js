import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCi9cBfQZ0I54RbzB__exoVGfBJ31s9Fz8',
      authDomain: 'manager-4f252.firebaseapp.com',
      databaseURL: 'https://manager-4f252.firebaseio.com',
      projectId: 'manager-4f252',
      storageBucket: 'manager-4f252.appspot.com',
      messagingSenderId: '702514729493',
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
