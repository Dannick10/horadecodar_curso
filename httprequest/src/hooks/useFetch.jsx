import { useEffect, useState } from "react";

export const useFetch =  (url) =>{

    const [data,setData] = useState(null)

    // refatorando 

    const [config,Setconfig] = useState(null)
    const [method, Setmethod] = useState(null)
    const [callFetch, SetcallFetch] = useState(false)

    const [loading, setLoanding] = useState(false)

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
        }
       
    }

    useEffect(()=>{
        const fetchData = async () => {
            setLoanding(true)

            const res = await fetch(url)
            const json = await res.json()

            setData(json)
            setLoanding(false)
        }

        fetchData()

    },[url, callFetch])

    useEffect(() => {
    const httpRequest =  async () => {
        if(method === "POST"){
            
            let fetchOptions = [url,config]

            const res = await fetch(...fetchOptions)
            const json = await res.json()

            SetcallFetch(json)

        }

    }

    httpRequest()

    },[config,method,url])
    

    return {data,httpConfig,loading}

}