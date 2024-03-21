import { createContext, useReducer } from "react";

export const ChangeColorContext = createContext()

export const titleColorReduce = (state,action) => {

    switch(action.type){
        case "RED":
            return { ...state, color: "red"}
        case "GREEN":
            return { ...state, color: "green"}
        default: 
        return state
    }
}

export const ChangeColorContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(titleColorReduce, { color: "purple"})
        console.log(state)
    return(
        <ChangeColorContext.Provider value={{...state,dispatch}}>
            {children}
        </ChangeColorContext.Provider>
    )

}