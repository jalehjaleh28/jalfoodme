import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import Routess from './componnets/Routs';
import Nav from './componnets/nav';
import { Footer } from './componnets/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav/>
      <Routess/>
      <Footer/>
    </BrowserRouter>
  
    </React.StrictMode>
);