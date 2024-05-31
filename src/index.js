import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Quiz from './components/Quiz';
import "./styles.css"

ReactDOM.render(
  <Provider store={store}>
    <Quiz />
  </Provider>,
  document.getElementById('root')
);
