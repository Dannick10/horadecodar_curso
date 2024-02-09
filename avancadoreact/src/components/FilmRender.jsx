import { useState } from "react"

const FilmRender = () =>{

    const recentFilm = ['Homem aranha','capitao america','batman o cavaleiro das trevas']

    const [rend] = useState(recentFilm)

    return(
        <div>
                <ul>
                    {rend.map((item)=>(
                        <li>{item}</li>
                    ))}
                </ul>
        </div>
    )
}

export default FilmRender