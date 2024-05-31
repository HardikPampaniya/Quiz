
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Quiz from './components/Quiz';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="row justify-content-center">
        <Quiz />
        <FireworksTest />
      </div>
    </Provider>
  );
};

export default App;
