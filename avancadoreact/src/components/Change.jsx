import React from 'react'

function Change({handleMessage}) {
  const msg = ['a','b','c']
  return (
    <div>
    <button onClick={() => handleMessage(msg[0])}>1</button>
    <button onClick={() => handleMessage(msg[1])}>1</button>
    <button onClick={() => handleMessage(msg[2])}>1</button>
     
        
    </div>
  )
}

export default Change