import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { createUser } from './util/user_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.createUser = createUser;
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root)
})