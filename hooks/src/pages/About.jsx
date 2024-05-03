import React from 'react'

import { useContext } from 'react'
import { SomeContext } from '../Components/HookuseContext'

const About = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>


    <p>{contextValue}</p>
    </div>
  )
}

export default About