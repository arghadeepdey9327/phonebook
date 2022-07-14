import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios'
axios.get('http://localhost:3001/persons').then(a=>ReactDOM.createRoot(document.getElementById('root')).render(
  <App axiosData={a.data}/>
))
  
