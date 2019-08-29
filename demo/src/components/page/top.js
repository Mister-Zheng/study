import React from 'react'

function top(props){
    return (
        <div>
            <img src={props.user.img} alt="."/>
            <p>{props.user.name}</p>
            <p>{props.user.num}</p>
        </div>
    )
}

export default top