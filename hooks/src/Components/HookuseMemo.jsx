import {useState, useEffect, useMemo} from 'react'


const HookuseMemo = () => {

    const [number,SetNumber] = useState(0)

    const premiumNumbers = useMemo(()=> {
       return ['0','100','200']
    },[])

    useEffect(() => {

        console.log('premium numbers')

    },[premiumNumbers])

  return (
    <div>
        <h2>UseMemo</h2>
        <input type="text" onChange={(e) => SetNumber(e.target.value)} value={number}/>
        {premiumNumbers.includes(number) ? <p>Acertou</p>: <p></p>}
    </div>
  )
}

export default HookuseMemo