import React from 'react'
import HookUseState from '../Components/HookUseState'
import HookUseReduce from '../Components/HookUseReduce'
import HookuseEffect from '../Components/HookuseEffect'
import HookuseHref from '../Components/HookuseHref'

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
    <HookuseHref/>
    </div>
  )
}

export default Home