
const CardDetails = ({brand,km,color}) =>{

    return(
        <div>
            <h2>Detalhe do carro</h2>
            <ul>
                <li>{brand}</li>
                <li>{km}</li>
                <li>{color}</li>
            </ul>
        </div>
    )
}

export default CardDetails