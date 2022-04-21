import { ThemeProvider } from '@material-ui/core';
import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import theme from './components/theme/index.js';
import {BrowserRouter} from 'react-router-dom'
import './i18n.js'
ReactDOM.render(
  <Suspense fallback={<div></div>}> 
  <ThemeProvider theme={theme} >
  <React.StrictMode>
  <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);

