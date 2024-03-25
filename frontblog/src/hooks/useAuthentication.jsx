import {
    getAuth,
    createUserWithEmailAndPasswword,
    signInWithEmailAndPassword,
    updateProfile,
    SignOut
} from 'firebase/auth'

import { useState,useEffect } from 'react'

export const useAuthentication = () => {
    const [error,Seterror] = useState(null)
    const [loading, SetLoading]= useState(null)

    //clenup

    const [cancelled,SetCancelled] = useState(false)

    const auth = getAuth()

    function checkiFisCancelled(){
        if(cancelled){
            return
        }
    }
}