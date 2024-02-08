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
                <EventDois/>
            </div>
        </div>
    )
}

export default Event