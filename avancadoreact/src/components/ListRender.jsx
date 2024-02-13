import { useState } from "react"

const ListRender = () =>{

   const [users,setUsers] = useState([
        {id: 1, name: 'daniel'},
        {id: 2, name: 'Mycaela'},
    ])

    const deleterandom =()=>{
        const number = Math.round(Math.random()* users.length) + 1
        console.log(number)

        setUsers((prevUsers)=>{
            return prevUsers.filter((user) => number !== user.id)
        })
    }
    return(
        <div>
            <ul>
                {users.map((users,i)=>(
                    <li key={users.id}>
                        {users.name}
                    </li>
                ))}
            </ul>

            <button onClick={deleterandom}>Delete users</button>

        </div>
    )
}

export default ListRender