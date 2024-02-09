import { useState } from "react"

const ListRender = () =>{
    const p = ['daniel','fabricio','paulo','ricardo']
    const [list] = useState(p)

    const [users] = useState([
        {id: 1, name:'Daniel', age: 24},
        {id: 2, name: 'Mycaela', age: 24}
    ])

    return(
        <div>
            <ul>
                {list.map((item,i) => (
                    <li>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((user) =>(
                    <li>
                        key={user.id} |
                        {user.name} |
                        {user.age}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ListRender