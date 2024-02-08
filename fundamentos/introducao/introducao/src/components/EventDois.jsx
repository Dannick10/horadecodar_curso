const EventDois = () =>{
    let i = 0
    const handlenumber = () =>{
        i++
       console.log(i)
    }

    return(
        <>
            <button onClick={handlenumber}>Soma</button>
            <p>{i}</p>
        </>
    )
}

export default EventDois