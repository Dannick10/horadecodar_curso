
import './App.css'

//components
import MyForms from './components/Myforms'
import Treinar from './components/Treinar'


function App() {
 
  return (
    <>
      <h2>Forms</h2>
      <MyForms user={{name:'Daniel',email:'danmaggot2@gmail.com', ender:'aracaju'}}/>

      <h2>Treino</h2>
      <Treinar/>
    </>
  )
}

export default App
