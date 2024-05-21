import { useEffect,useRef,useState } from "react";

export const usePrevius = (value) => {
    const ref = useRef

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}