// 1 - criar context
import { createContext, useState } from "react";

export const CounterContext = createContext()

// provide

export const CounterContextProvider = ({children}) =>{
    const [counter,SetCounter] = useState(5)

    return(
        <CounterContext.Provider value={{counter, SetCounter}}>
            {children}
        </CounterContext.Provider>
    )
}