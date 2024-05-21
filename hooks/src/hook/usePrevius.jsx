import { useEffect,useRef,useState, useDebugValue } from "react";

export const usePrevius = (value) => {
    const ref = useRef

    useDebugValue('--------custom hook e usebug')
    useDebugValue('anterior é ' + value)

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}