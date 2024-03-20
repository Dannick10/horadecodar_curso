import { useContext } from "react";
import { ChangeColorContext } from "../Context/ChangeColorContext";

export const useColorContext = () => {
    const context = useContext(ChangeColorContext)

    if(!context ){
        console.log('sem contexto')
    }

    return context
}
