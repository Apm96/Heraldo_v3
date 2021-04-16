import React , {Fragment } from 'react';
import './App.css';
import Header from './components/Header.jsx'
import Footer from './components/Footer.js'
import Body from './components/Body.js'
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  const fecha = new Date().getFullYear();
  return (
    <div class="container-fluid">
      <Header titulo='El Heraldo' />
      <Body></Body>
      <Footer fecha={fecha} />
    </div>
  );
}

export default App;
