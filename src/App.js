import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink}
 from 'react-router-dom';
 import './App.css';
 import Home from './components/Home';
 import History from './components/History'

class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <div>
              <NavLink className="navLink" exact to="/">Acceuil</NavLink>
              <NavLink className="navLink" to="/notre-histoire"> Notre histoire</NavLink>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
              </Switch>
      </div>
            </BrowserRouter>
    )
  }
}

export default App;
