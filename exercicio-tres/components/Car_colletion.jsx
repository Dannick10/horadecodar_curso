import React from 'react'

import Card_car from './Card_car'

function Car_colletion() {

    const cars = [
        {
        id: 1,
        name:'MUSTANG',
        marca: 'ford',
        cor: 'cor',
        preco: 500.000,
        desconto: 0
        },
        {
         id: 2,
         name:'CAMARO',
         marca: 'Chevrolet',
         cor: 'cor',
        preco: 340.000,
        desconto: 50
            },
            {
          id: 3,
         name:'HILUX',
         marca: 'Chevrolet',
         cor: 'cor',
          preco: 120.000,
         desconto: 15
                },
                {
             id: 3,
             name:'bmw_rx8',
             marca: 'bmw',
            cor: 'preto',
                    preco: 950.000,
             desconto: 0
                    },
                    {
                        id: 4,
                        name:'Carrodabarbie',
                        marca: 'barbie',
                        cor: 'rosa',
                        preco: 90,
                        desconto: 85
                        },
        
    ]

  return (
    <div>
        {cars.map((car)=>(
            <Card_car name={car.name} marca={car.marca} cor={car.cor} preco={car.preco} desconto={car.desconto} key={car.id}/>
        ))}

    </div>
  )
}

export default Car_colletion