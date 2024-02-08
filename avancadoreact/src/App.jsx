
import './App.css'


//components
import ManageData from './components/ManageData'


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
        <ManageData/>
      </div>

    </>
  )
}

export default App
