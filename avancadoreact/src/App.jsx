import { useState } from 'react'
import './App.css'


//components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import FilmRender from './components/FilmRender'
import Condicional from './components/Condicional'
import ShowUseName from './components/ShowUseName'

function App() {

  const name = 'Dandanzinho'
  const [useNam,setuseNam] = useState('Mycaela')

  return (
    <>
      <h3>Avançado REact</h3>

      <div className='spide-home'>
        <span>SPIDE</span>
        <span>MAN</span>
        <img src="/spideman.png" alt="" />
      </div>  
     <ListRender/>
    <Condicional/>
    <ShowUseName name={useNam}/>
    <button onClick={()=>{setuseNam('Mycaela e daniel')}}>Clique</button>

    </>
  )
}

export default App
