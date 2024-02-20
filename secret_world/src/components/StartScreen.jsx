function StartScreen({StartGame}) {
  return (
    <div>
        <h1>Secrets worlds</h1>
        <p>Clique no botao abaixo para jogar</p>
        <button onClick={StartGame}>Começar</button>
    </div>
  )
}

export default StartScreen