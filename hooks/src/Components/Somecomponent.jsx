import {forwardRef, useRef, useImperativeHandle} from 'react'

const Somecomponent = forwardRef((props,ref) => {
 const localinputRef = useRef()

 useImperativeHandle(ref, () => {return {
    validate: () => {
        if(localinputRef.current.value.length > 3){
           localinputRef.current.value = ''
        }
    }
 }})

return <div>
    <p>Insira no maximo 3 caracteres</p>
        <input type="text" ref={localinputRef} />
</div>
})

export default Somecomponent