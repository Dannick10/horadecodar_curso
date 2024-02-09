
import './App.css'


//components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import FilmRender from './components/FilmRender'

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

      <div>
        <ListRender/>
      </div>
      
      <div>
        <FilmRender/>
      </div>

    </>
  )
}

export default App
