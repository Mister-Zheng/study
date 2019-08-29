import React,{ Component } from 'react'
// import '.css' 
import {Link, Switch, Route, Redirect, NavLink } from 'react-router-dom'
class Aaa extends Component {
   state = {}

   render(){
         return(
             <div className='home'>
                   <h1>Home路由</h1>
                   <Link to="/my">to My</Link>
             </div>
   )}
}
export default Aaa