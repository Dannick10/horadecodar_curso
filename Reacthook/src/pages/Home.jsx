
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
            <li>{item.name}</li>
            <li>{item.price}</li>      
          </>
        ))}
      </ul>
    </div>
  )
}

export default home