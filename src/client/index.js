/* global __DEV__ */
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import Root from './Root';
import Immutable from 'immutable';
import installDevTools from 'immutable-devtools';

if (__DEV__) {
  installDevTools(Immutable);
}

const store = createStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
