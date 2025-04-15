import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="react-endless-practice">
    <App />
  </BrowserRouter>
);
