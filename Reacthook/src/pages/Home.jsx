import { Link } from 'react-router-dom'
import {useFetch} from '../hooks/useFetch'



const home = () => {
  
  const url = "http://localhost:3000/products"

  const {data:items,loading,error} = useFetch(url)
  
  console.log(items)
  return (
    <div>
      <h1>Produtos</h1>
      {error & <p>{error}</p>}
      <ul>
        {items && items.map((item)=>(
          <>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>      
            <Link to={`/products/${item.id}`}>Detalhes</Link>
          </>
        ))}
      </ul>
    </div>
  )
}

export default home