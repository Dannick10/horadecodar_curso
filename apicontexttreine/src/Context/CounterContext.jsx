import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterContextProvider = ({children})=> {
    const [counter,SetCounter] = useState(0)

    return( 
       <CounterContext.Provider value={{counter,SetCounter}}>
        {children}
       </CounterContext.Provider>
    )
}
