
import './App.css'


//components
import Mycomponent from './components/Mycomponent'

function App() {
 
  return (
    <>
      <div className="app">
    <h1>React com css</h1>

    <Mycomponent/>
    <p style={{padding:'10px', width: '300px', margin: 'auto'}}>Esse paragrafo e do app.js</p>
      </div>
    </>
  )
}

export default App
