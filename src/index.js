import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {DataProvider} from "./contexts/globalState"
import {BrowserRouter as Router} from "react-router-dom"
 
ReactDOM.render(
  <React.StrictMode>
  <DataProvider>
    <Router>

   
      <App />
      </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);