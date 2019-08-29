import React,{ Component } from 'react'
// import '.css' 
import {Link, Switch, Route, Redirect, NavLink } from 'react-router-dom'
class Aaa extends Component {
   state = {}

   render(){
         return(
             <div className='My'>
                 <h1>My</h1>
                 <Link to="/movie">to Movie</Link>
             </div>
   )}
}
export default Aaa