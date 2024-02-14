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
import Container from './components/container'
import Execution from './components/Execution'
import Message from './components/Message'
import Change from './components/Change'
import MessageState from './components/MessageState'
import ChangeMEssageState from './components/ChangeMEssageState'
function App() {

  const name = 'Dandanzinho'
  const [useNam,setuseNam] = useState('Mycaela')

  const [messagee, setmessagee] = useState('')

  const handleMessage = (msg) =>{
    setmessage(msg)
  }

  const [messagestate,setMessagestate] = useState('')

  const handleMessageState=(msg)=>{
    return setMessagestate(msg)
  }

  function showMessage(){
     console.log('Evento no componente pai')
  }

  return (
    <>
      <h3>Avançado REact</h3>
      <MessageState msg={messagestate}/>
      <ChangeMEssageState handleMessageState={handleMessageState}/>
    </>
  )
}

export default App
