import useCounterContext from "../hooks/useCounterContext"

const ChangeCounter = () => {

    const {counter,setCounter} = useCounterContext()

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  )
}

export default ChangeCounter