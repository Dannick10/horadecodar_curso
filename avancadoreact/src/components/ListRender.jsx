import { useState } from "react"

const ListRender = () =>{
    const p = ['daniel','fabricio','paulo','ricardo']
    const [list] = useState(p)

    return(
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

        </div>
    )
}

export default ListRender