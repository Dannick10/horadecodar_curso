import { createContext, useReducer } from "react";

export const ColorChangeContext = createContext()

export const titleColorReduce = (state,action) => {

    switch(action.type) {
        case "RED":
        return {...state, color: "red"}
        case "BLUE":
        return {...state, color: "blue"}
        default:
            return state
    }
}

export const ColorChangeContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(titleColorReduce, {color: "purple"})

    return ( 
        <ColorChangeContext.Provider value={{...state,dispatch}}>
            {children}
        </ColorChangeContext.Provider>
    )
}