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

  const [pickeWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState('')

  const PickWorldAndCategory = () =>{

    //random category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}

  }
  
  
      const [guessedLetters, setGuessedLetters] = useState([])
      const [wrongLetters, setWrongLetters] = useState([])
      const [guesses,setGuesses] = useState(3)
      const [score,setScore] = useState(0)
//starts screts word game
  const StartGame = () =>{

    const {word, category} = PickWorldAndCategory()

    //create array of letters 

    let wordLetters = word.split('')
    wordLetters.map((l)=>l.toLowerCase())
    console.log(wordLetters)

    console.log(word,category)
      
      //fil states
      setPickedWord(word)
      setPickedCategory(category)
      setLetters(wordLetters)

      console.log(pickeWord)
      console.log(pickedCategory)
      console.log(wordLetters)

    setGameStage(stages[1].name)
  }

  //process the letter i nput 
  const verifyletter = (letter) =>{
   console.log(letter)
  }

  //retry

  const retry = () =>{
    setGameStage(stages[0].name)
  }
  
  return (
    <>
     {gameStage === 'start' && <StartScreen StartGame={StartGame}/>}
     {gameStage === 'game' && <Game
      verifyletter={verifyletter}
      pickeWord={pickeWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />}  
     {gameStage === 'end' && <Over retry={retry}/>}  
     
     </>
  )
}

export default App
