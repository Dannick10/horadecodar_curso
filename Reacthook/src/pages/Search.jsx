import {useSearchParams,Link} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {

    const [searchParams] = useSearchParams()
    
    const url = "http://localhost:3000/products?" + searchParams

    const {data:items,loading,error} = useFetch(url)

  return (
    <div>
        <h1>Resultado disponiveis</h1>
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

export default Search