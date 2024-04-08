import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from "firebase/firestore";

export const useFetchDocuments = (docCollection, sarch = null, uid = null) => {

    const [documents, setDocuments] = useState(null)
    const [loading, SetLoading ] = useState(null)
    const [error, SetError ] = useState(null)

    const [cancelled, SetCancelled ] = useState(null)

    useEffect(()=> {

        const loadData = async () => {
            if(cancelled) return 

            SetLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {

                let q 

                // busca
                //dash

                q = await query(collectionRef, orderBy('createdAt','desc'))

                await onSnapshot(q, (QuerySnapshot) => {

                    setDocuments(
                        QuerySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),

                        }))
                    )

                })
                SetLoading(false)
            } catch (error) {
                console.log(error)
                SetError(error.message)
                SetLoading(false)
            }

        }
        
        loadData()
    },[docCollection, search, uid, cancelled])

    useEffect(() => {
        return () => SetCancelled(true)
    },[])

    return { documents, loading, error }

}