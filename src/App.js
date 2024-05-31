
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Quiz from './components/Quiz';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Quiz Application</h1>
        <Quiz />
      </div>
    </Provider>
  );
};

export default App;
