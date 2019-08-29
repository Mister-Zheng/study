import React,{Component} from 'react';
import './App.css'

import Home from './components/page/home.js'
import Movie from './components/page/movie.js'
import My from './components/page/my.js'
import {Link, Switch, Route, Redirect, NavLink } from 'react-router-dom'
// import Header from './components/page/header'
// import Footer from './components/page/footer'
class App extends Component {
     
      state={ 
        
      }
  
      render(){
        return (
          <div className="App">
            <h1>H1标签</h1>
          <div className="cont">
          <Switch>
            <Route path="/home" component={Home} ></Route>
            <Route path="/movie" component={Movie}></Route>
            <Route path="/my" component={My}></Route>
          </Switch>
          </div>
          <footer>
            <NavLink activeClassName="select" to="/home">首页</NavLink>
            <NavLink activeClassName="select" to="/movie">电影</NavLink>
            <NavLink activeClassName="select" to="/my">我的</NavLink>   
          </footer>       
          </div>
        )
      }
}

export default App;
