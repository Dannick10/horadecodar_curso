
const CardDetails = ({brand,km,color,newCar}) =>{

    return(
        <div>
            <h2>Detalhe do carro</h2>
            <ul>
    
                <li>{brand}</li>
                <li>{km}</li>
                <li>{color}</li>
            {newCar && 'Esse carro é novo'}
            </ul>
        </div>
    )
}

export default CardDetails