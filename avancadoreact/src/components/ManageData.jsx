import { useState } from "react"

const ManageData=()=>{
    const somedata = 10

    const [number, setnumber] = useState(10) 

    return(
        <div>

            <div>
                valor: {somedata}
            </div>
                <button onClick={()=>{somedata = 15}}>Mudar valor</button>

                <button onClick={()=>{setnumber('OIIII')}}>States</button>
                <div>UseStates
                    <p>{number}</p>
                </div>

        </div>
    )
}


export default ManageData