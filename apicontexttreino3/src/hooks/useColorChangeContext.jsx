import { useContext } from "react";
import { ColorChangeContext } from "../Context/ColorChangeContext";

 export const useColorChangeContext = () =>{
    const context = useContext(ColorChangeContext)

    if(!context){
        console.log('sem contexto')
    }

    return context
 }