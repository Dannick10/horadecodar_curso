import { createContext, useReducer } from "react";

export const ChangeColorContext = createContext()

export const titleColorReduce = (state,action) => {

}

export const ChangeColorContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(titleColorReduce, { color: "purple"})
        console.log(state)
    return(
        <ChangeColorContext.Provider value={{...state}}>
            {children}
        </ChangeColorContext.Provider>
    )

}