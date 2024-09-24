import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, { initialState } from './components/Reducer/Reducer';
import { StateProvider } from './components/State_provider/State_provider';

ReactDOM.render(
  <>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </>,
  document.getElementById('root')
);