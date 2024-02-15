
import { useState } from 'react'
import './App.css'


//components
import Mycomponent from './components/Mycomponent'

function App() {

  const x = false
const [name] = useState('DANIEL')
 
  return (
    <>
      <div className="app">
    <h1>React com css</h1>

    <Mycomponent/>
    <p style={{
      padding:'10px',
       width: '300px',
        margin: 'auto'}}>
          Esse paragrafo e do app.js</p>

          <div className="test" style={x?{backgroundColor: 'black'}:{backgroundColor: 'purple'}}>AAAAAAAA</div>

          <div style={name=='DANIEL'?{color: 'red'}:{color: 'blue'}}>Daniel</div>
      </div>
    </>
  )
}

export default App
