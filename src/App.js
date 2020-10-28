import React from 'react';
import './App.css';
import Main from './Component/Main/Main'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Preloader from './Component/Preloader/Preloader'
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component{
  constructor(){
  super()
  this.state={
    p:false
  }
}
componentDidMount(){
  this.setState({p:true})
}
  render(){
  return (
    <>
    {this.state.p?<BrowserRouter>
    <Header/>
    <Main/>
    <Footer/>
    </BrowserRouter>:
    <Preloader/>
    
    }
    </>
  );
  }
}

export default App;
