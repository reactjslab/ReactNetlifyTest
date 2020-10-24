import React from 'react';
import './App.css';
import Main from './Component/Main/Main'
import Header from './Component/Header/Header'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Main/>
    </BrowserRouter>
    </>
  );
}

export default App;
