//styles
import './App.css'


//react
import { startTransition, useCallback, useEffect, useState } from 'react'

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



//starts screts word game
  const StartGame = () =>{
    setGameStage(stages[1].name)
  }

  //process the letter i nput 
  const verifyletter = () =>{
    setGameStage(stages[2].name)
  }

  //retry

  const retry = () =>{
    setGameStage(stages[0].name)
  }
  
  return (
    <>
     {gameStage === 'start' && <StartScreen StartGame={StartGame}/>}
     {gameStage === 'game' && <Game verifyletter={verifyletter}/>}  
     {gameStage === 'end' && <Over retry={retry}/>}  
     
     </>
  )
}

export default App
