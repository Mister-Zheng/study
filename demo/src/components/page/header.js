import React from 'react'
import './header.css'
import Top from './top'
import Bom from './bom'
function header(props){
    return(
        <div className="header">
            <Top user={props.blog.user}></Top>
            <Bom news={props.blog.news}></Bom> 
        </div>
    )
}

export default header