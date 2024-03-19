import { createContext, useReducer } from "react";

export const TitleColorContext  = createContext()

export const titleColorReduce = (state, action) => {

}

export const TitleColorContextProvider = ({childre}) =>{

    const [state,despatch] = useReducer(titleColorReduce, {color: 'purple'})
 
    return(
        <TitleColorContext.Provider value={{...state}}>
            {childre}
        </TitleColorContext.Provider>
    )
}