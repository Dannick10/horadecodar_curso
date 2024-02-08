const Challenge = () =>{

    const handlenaosei = (e,i) =>{
return <div>
    <h1>{e}</h1>
    <p>{i}</p>
</div>
    }

    const handleclicksoma = (n1,n2) =>{
        return console.log(n1+n2)
    }

    return(
        <div>
            <div>
                {handlenaosei('OLHASO ERREI', 'puta merda deu certo')}
            </div>

            <div>
                <button onClick={handleclicksoma(5,3)}></button>
            </div>
        </div>
    )
}

export default Challenge