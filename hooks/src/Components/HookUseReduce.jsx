import React, { useReducer, useState } from 'react'


const HookUseReduce = () => {

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    const initialTask = [
      {id: 1, text: 'fazeruma coisa'},
      {id: 2, text: 'fazeruma outra'},
    ]

    const taskReducer = (state, action) => {
      switch(action.type) {
        case "ADD":
          const newTask = {
            id: Math.random(),
            task: taskText,
          }

          setTaskText('')

          return [...state, newTask]
          case "REMOVE":
            return state.filter((task) => task.id !== action.id)
            default: 
            return state
      }
    } 

    
    const [taskText, setTaskText] = useState('')
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTask)
   
    const handleSubmit = (e) => {
      e.preventDefault()

      dispatchTask({ type: "ADD"} )
    }

    const removeTask = (id) => {
      dispatch({type: "DELETE", id:id})
    }
    
  return (
    <div>
        <h2>userReduce</h2>
            <p>Numero: {number}</p>
            <button onClick={dispatch}>Alterar número</button>
        <hr />
        <h3>Tarefas</h3>
        {tasks.map((task) => (<>
          <li key={task.id}>{task.text}</li>
        </>))}

        <form onSubmit={handleSubmit}>
          <input type="text" 
          onChange={(e)=>setTaskText(e.target.value)} 
          value={taskText} 
          onDoubleClick={() => removeTask(task.id)}/>
          <input type="submit" value="Enviar" />
        </form>

    </div>
  )
}

export default HookUseReduce