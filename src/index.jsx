import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import { Provider } from './Context/headerContext';
import { ItemProvider } from './Context/itemContext';

import App from './App';


ReactDOM.render(
  <>
  <BrowserRouter>
    <ItemProvider>
      <Provider>
        <App />
      </Provider>
    </ItemProvider>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


