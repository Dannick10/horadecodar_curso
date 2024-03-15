import { useContext } from "react";

import { CounterContext } from "../Context/CounterContext";


import React from 'react'

const ChangeCounter = () => {
    const {counter, SetCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => SetCounter(counter + 1)}>Click</button>
    </div>
  )
}

export default ChangeCounter