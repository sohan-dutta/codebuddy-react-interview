import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import worker from './mocks/browser';
import 'react-toastify/dist/ReactToastify.css';

worker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-right" autoClose={5000} theme="colored" />
  </React.StrictMode>,
  document.getElementById('root'),
);
