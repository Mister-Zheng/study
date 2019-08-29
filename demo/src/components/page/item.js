import React from 'react'

function item (props){
    return (
        <div>
            <p>{props.item.title}</p>
            <p>{props.item.con}</p>
            <p>{props.item.time}</p>
        </div>
    )
}
export default item