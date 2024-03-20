import { createContext, useReducer } from "react";

export const ColorChangeContext = createContext()

export const titleColorReduce = ({state,action}) => {

}

export const ColorChangeContextProvider = ({children}) => {

    const [state,despatch] = useReducer(titleColorReduce, {color: "red"})

    return ( 
        <ColorChangeContext.Provider value={{...state}}>
            {children}
        </ColorChangeContext.Provider>
    )
}