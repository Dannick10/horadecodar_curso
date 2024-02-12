import { useState } from 'react'
import './App.css'


//components
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import FilmRender from './components/FilmRender'
import Condicional from './components/Condicional'
import ShowUseName from './components/ShowUseName'
import CardDetails from './components/CardDetails'
import Fragments from './components/Fragments'

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
      <ManageData/>
     <ListRender/>
    <Condicional/>
    <ShowUseName name={useNam}/>
    <button onClick={()=>{setuseNam('Mycaela e daniel')}}>Clique</button>

    <CardDetails brand='vw' km={100} color='azul'/>
    <CardDetails brand='fiat' km={150} color='vermelho'/>
    <CardDetails brand='mustang' km={0} color='branco' newCar={true}/>

    <Fragments propFragments='teste'/>
    </>
  )
}

export default App
