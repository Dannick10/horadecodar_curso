import React from 'react'
import HookUseState from '../Components/HookUseState'
import HookUseReduce from '../Components/HookUseReduce'
import HookuseEffect from '../Components/HookuseEffect'

import { useContext } from 'react'
import { SomeContext } from '../Components/HookuseContext'

const Home = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>Home
    <HookUseState/>
    <HookUseReduce/>
    <HookuseEffect/>
    <p>{contextValue}</p>
    </div>
  )
}

export default Home