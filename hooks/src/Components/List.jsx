import React from 'react'
import { useState,useEffect } from 'react'

const List = ({getItems}) => {

    const [myItems, setMyItems ] = useState([])

    useEffect(() => {
        console.log('buscando items DB')
        setMyItems(getItems)

    },[getItems])

  return (
    <div>
        {myItems && myItems.map((items) => (<>
        <p key={items}>{items}</p>
        </>))}
    </div>
  )
}

export default List