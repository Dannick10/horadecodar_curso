import React from 'react'
import CardsDeatils from './CardsDeatils'

function Person() {

    const pesso = [
        {id: 1, name: 'Daniel',idade: 24, prof: 'Dev. frontend'},
        {id: 2, name: 'Lanzinho', idade: 10, prof: 'dev. backend'},
        {id: 3, name: 'Fabricio', idade: 20, prof: 'dev.frontend'}
    ]


  return (
    <div>
            {pesso.map((p)=>(<div key={p.id}>
                <CardsDeatils name={p.name} idade={p.idade} prof={p.prof}/> 
            </div>))}


    </div>
  )
}

export default Person