import React from 'react'

function ChangeFilm({handleFilm}) {
    const film = ['harrypotter','Need for speed','Avatar']

    const i = Math.floor(Math.random()*film.length)
    console.log(i)
  return (
    <div>

        <button onClick={()=> handleFilm(film[i])}>Film</button>

    </div>
  )
}

export default ChangeFilm