import {db} from '../../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
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

    const createUser = async (data) => {
        checkiFisCancelled()
        SetLoading(true)
        Seterror(null)
        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
                )
                await updateProfile(user, {
                    displayName: data.displayName
                })
                SetLoading(false)
                return user
        }catch(error){
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres'
            } else if(error.message.includes('email-already')){
                systemErrorMessage = 'email já cadastrado'
            } else {
                systemErrorMessage = 'ocorreu algum erro, por favor tente mais tarde'
            }
            Seterror(systemErrorMessage)
            SetLoading(false)
        }
    }

    //logout 
    const logout = () => {
        checkiFisCancelled()
        signOut(auth)
    }

    useEffect(()=>{
        return () => SetCancelled(true)
    },[])
    
    //logi 
    const login = async (data) => {
        checkiFisCancelled()
        SetLoading(true)
        Seterror(false)

        try{
            await signInWithEmailAndPassword(auth, data.email,data.password)
            SetLoading(false)
        }catch{
            let systemErrorMessage

            if(error.message.includes("user-not-found")){
                systemErrorMessage = 'Usuario não encontrado'
            } else if(error.message.includes('wrong-password')){
                systemErrorMessage = 'Senha incorreta'
            } else {
                systemErrorMessage = 'Ocorreu algum erro, volte mais tarde'
            }

            Seterror(systemErrorMessage)
            SetLoading(false)
        }
    }

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

   }