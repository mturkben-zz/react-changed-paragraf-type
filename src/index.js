import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {Provider} from "./context";

ReactDOM.render(
  <Provider>
      <App />
  </Provider>,
  document.getElementById('root')
);