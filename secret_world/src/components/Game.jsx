import { useState, useRef } from "react"

const Game = ({verifyletter,pickeWord,pickedCategory,letters,guessedLetters,wrongLetters,guesses,score,}) => {
 
  const [letter, setLetter] = useState('')
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    verifyletter(letter)
    setLetter('')
    letterInputRef.current.focus()
  }

  const letterInputRef = useRef(null)


  return (
    <div>
           <p className="points">
            <span>Pontuação: {score}</span>
           </p>
           <h1>Adivinhe a palavra</h1>
           <h3 className="tip">Dica sobrea a palavra: <span>{pickedCategory}</span></h3>
           <div className="wordContainer">

              {letters.map((letters,i)=>(
                guessedLetters.includes(letters)?(<span className="blockcode" key={i}></span>):(<span className="blockcode"  key={i}></span>)))}
            <span className="blankSquare"></span>
           </div>

           <div className="letterContainer">
              <p>Tenta adivinhar uma letra da palavra</p>
              <form action="" onSubmit={handleSubmit}>
                <input type="text" name="letter" maxLength={1} required onChange={(e)=>setLetter(e.target.value)} value={letter} ref={letterInputRef}/>
              <button>JOGAR!</button>
              </form>
           </div>
          <div className="wrongLetterContainer">
            <p>Letras já utilizadas</p>
            {wrongLetters.map((letter,i)=>(<span key={1}>{wrongLetters}</span>))}
          </div>
     </div>
  )
}

export default Game