

function Game({verifyletter}) {
  return (
    <div>
           <p className="points">
            <span>Pontuação: 0</span>
           </p>
           <h1>Adivinhe a palavra:</h1>
           <h3 className="tip">Dica sobrea a palavra: <span>dica</span></h3>
           <div className="wordContainer">
            <span className="letter">A</span>
            <span className="blankSquare"></span>
           </div>

           <div className="letterContainer">
              <p>Tenta adivinhar uma letra da palavra</p>
              <form action="">
                <input type="text" name="letter" maxLength={1} required/>
              </form>
              <button>JOGAR!</button>
           </div>
          <div className="wrongLetterContainer">
            <p>Letras já utilizadas</p>
            <span>a,</span>
            <span>b,</span>
          </div>
     </div>
  )
}

export default Game