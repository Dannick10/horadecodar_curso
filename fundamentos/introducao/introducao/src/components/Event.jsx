import EventDois from "./EventDois"

const Event = () =>{

    const handleMyEvent = (e) =>{
        console.log(e)
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>

                <div>
                    <button onClick={()=>{ console.log('clicou tmb')}}>Clique aqui tambem</button>
                </div>

               {/* <div>
                    <button onClick={()=>{
                        if(true){
                            console.log('isso n deveria existir')
                        }
                    }}>Clique aqui pfv</button>
                </div> */}
           
        </div>
    )
}

export default Event