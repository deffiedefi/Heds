// MODULES
import React from 'react';
import ReactDOM from 'react-dom';
import StateProvider from '../providers/StateProvider';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import App from './App';

// UTILS
import 'regenerator-runtime/runtime.js';

// # INDEX - REACT DOM & CONTEXT PROVIDER


ReactDOM.render(
   <BrowserRouter>
      <StateProvider>
            <App />
      </StateProvider>
   </BrowserRouter>,
   document.getElementById('root')
);
