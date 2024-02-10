import { useState } from "react"

const Condicional =() =>{

    const [x] = useState(false)

    return (
        <div>
            <h1>Isso sera exibido?</h1>
            {x && <p>Se x for verdade sim</p>}
            {!x && <p>Se x for falso nao</p>}
        </div>
    )
}

export default Condicional