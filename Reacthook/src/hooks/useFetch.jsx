import { useEffect, useState } from "react";

export const useFetch =  (url) =>{

    const [data,setData] = useState(null)

    // refatorando 

    const [config,Setconfig] = useState(null)
    const [method, Setmethod] = useState(null)
    const [callFetch, SetcallFetch] = useState(false)

    const [loading, setLoanding] = useState(false)

    const [error,setError] = useState(null)

    const [itemID, SetItemId] = useState(null)

    const httpConfig = (data, method) => {
        if(method === "POST"){
            Setconfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
        })
        Setmethod(method)
        } else if(method === "DELETE"){
            Setconfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },

            })
            Setmethod(method)
            SetItemId(data)
        }
       
    }

    useEffect(()=>{
        const fetchData = async () => {

            setLoanding(true)

        try{
            const res = await fetch(url)
            const json = await res.json()

            setData(json)
        }
        catch(error){
            console.log(erro.message)

            setError(erro.message)
        }

            setLoanding(false)
        }

        fetchData()

    },[url, callFetch])

    useEffect(() => {
    const httpRequest =  async () => {

            let json 

        if(method === "POST"){
            
            let fetchOptions = [url,config]

            const res = await fetch(...fetchOptions)
             json = await res.json()

            SetcallFetch(json)

        } else if(method === "DELETE"){
            const deleteURL = `${url}/${itemID}`

            const res = await fetch(deleteURL,config)
            json = await res.json()
        }

        SetcallFetch(json)

    }

    httpRequest()

    },[config,method,url])
    

    return {data,httpConfig,loading,error}

}