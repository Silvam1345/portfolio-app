import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header, Footer, About, Contact, ProjectDetail, ProjectList, Home} from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element = {<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

/**
 *      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */

export default App;
