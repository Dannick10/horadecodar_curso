import React from 'react'

function CardsDeatils() {

    const pesso = [
        {id: 1, name: 'Daniel',idade: 24, prof: 'Dev. frontend'},
        {id: 2, name: 'Lanzinho', idade: 10, prof: 'dev. backend'},
        {id: 3, name: 'Fabricio', idade: 20, prof: 'dev.frontend'}
    ]



  return (
    <div style={{display:'flex'}}>
    {pesso.map((p)=>(
        <div style={{backgroundColor:'rgb(40,40,40)', borderRadius: '20px', padding: '10px', margin: '10px'}} key={p.id}>
            <h2>Habilitação</h2>
            <p>Nome: {p.name}</p>
            <p>idade: {p.idade}</p>
            <p>profissão: {p.prof}</p>
            <p>{p.idade>18?'pode':'nãopode'}</p>
        </div>
    ))}
    </div>
  )
}

export default CardsDeatils