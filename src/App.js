//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './portfolio.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, About, Contact, ProjectDetail, ProjectList, Home, Sidebar } from './components';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="body-content">
          <Routes className="routes-container">
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/projects' element={<ProjectList></ProjectList>}></Route>
            <Route path='/project/:name' element={<ProjectDetail></ProjectDetail>}></Route>
            <Route path='*' element={<h1>Sorry! This page doesn't exist.</h1>}></Route>
          </Routes>
          <Sidebar></Sidebar>
        </div>
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
