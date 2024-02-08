import EventDois from "./EventDois"

const Event = () =>{

    const handleMyEvent = (e) =>{
        console.log(e)
        
    }

    const rendersource = (x) =>{
        if(x){
            return <h1>OI</h1>
        }else{
            return <h1>TCHAU</h1>
        }
    }

    const render =(x) =>{
        return x?'a':'b'
    }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>

                <div>
                    <button onClick={()=>{ console.log('clicou tmb')}}>Clique aqui tambem</button>
                </div>

                <div>
                    {rendersource()}
                </div>

               {/* <div>
                    <button onClick={()=>{
                        if(true){
                            console.log('isso n deveria existir')
                        }
                    }}>Clique aqui pfv</button>
                </div> */}

            <div>
                {render(true)}
            </div>
        </div>
    )
}

export default Event