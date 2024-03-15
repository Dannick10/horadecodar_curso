import { useContext } from "react";
import { CounterContext } from "../Context/CounterContext";

import React from 'react'

const useCounterContext = () => {

    const context = useContext(CounterContext)

    if(!context){
        console.log('sem contexto')
    }

  return context
}

export default useCounterContext