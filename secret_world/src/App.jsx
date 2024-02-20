//styles
import './App.css'


//react
import { useCallback, useEffect, useState } from 'react'

//componetnts
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import Over from './components/Over'

//words
import { wordsList } from './data/world'

const stages = [
  {id: 1, name:'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  console.log(words)

  return (
    <>
     {gameStage === 'start' && <StartScreen/>}
     {gameStage === 'game' && <Game/>}  
     {gameStage === 'end' && <Over/>}  
     
     </>
  )
}

export default App
