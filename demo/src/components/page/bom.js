import React from 'react'
import Item from './item'
function bom(props){
    return (
        <div>
            {
                props.news.map(item=>{
                    return <Item key={item.idx} item={item}></Item>
                })
            }
        </div>
    )
}

export default bom