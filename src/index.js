import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/react-endless-practice">
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={1500} />
    </Provider>
  </BrowserRouter>
);
