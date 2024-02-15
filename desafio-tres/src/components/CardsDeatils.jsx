import React from 'react'


function CardsDeatils({name,idade,prof}) {

  return (
    <div>

        <h2>Carta habilitação</h2>
        <p>nome: {name}</p>
        <p>idade: {idade}</p>
        <p>prof: {prof}</p>
            <p>{idade>18?'pode tirar habilitação':'nao pode tirar habilitação'}</p>
    </div>
  )
}

export default CardsDeatils