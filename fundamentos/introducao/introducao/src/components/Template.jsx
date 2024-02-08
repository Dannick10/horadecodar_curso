const Template = () =>{

    const name = 'Daniel'
    const data = {
        age: 24,
        job: 'progm'
    }

    return(
        <div>
            <hr></hr>
            <h1>Olá {name},tudo bem ?</h1>
            <p>Sua idade é {data.age}</p>
            <p>Voçê atua como ? {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log('oi')}</p>
        </div>
    )
}

export default Template