import React,{ Component } from 'react'
// import '.css' 
import {Link, Switch, Route, Redirect, NavLink } from 'react-router-dom'
class Aaa extends Component {
   state = {}
    res(){
        this.props.history.push('/my');
    }
   render(){
         return(
             <div className='movie'>
                 <h1>movie</h1>
                 <Link to="/home">to home</Link>
                 <button onClick={()=>this.res()}>去--我的</button>
             </div>
   )}
}
export default Aaa