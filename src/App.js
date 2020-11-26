import React from 'react';
import './App.css';
import Main from './Component/Main/Main'
import Contact from './Component/Contactme/Contact'
import About from './Component/About/About'
import Error from './Component/Error/Error'
import Preloader from './Component/Preloader/Preloader'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'

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
    {this.state.p?
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/contact' component={Contact}/>
    <Route exact path='/about' component={About}/>
    <Route component={Error} statusCode={404}/>
    </Switch>
    </BrowserRouter>:
    <Preloader/>
    
    }
    </>
  );
  }
}

export default App;
