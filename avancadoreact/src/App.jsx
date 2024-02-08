
import './App.css'
import spide from "../public/spideman.png"

function App() {
 
  return (
    <>
      <h3>Avançado REact</h3>

      <div className='spide-home'>
        <span>SPIDE</span>
        <span>MAN</span>
        <img src="/spideman.png" alt="" />
      </div>

      <div>
        <img style={{transform:"scaleY(-1)", opacity: "0.2"}} src={spide} alt="" />
      </div>
    </>
  )
}

export default App
