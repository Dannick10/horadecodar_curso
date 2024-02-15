import style from  './Card_car.module.css'

const Card_car=({name,marca,cor,preco,desconto})=>{
   
    return(
        <div className={style.carcard}>
         <h1 style={{textAlign:'center'}}>Carro</h1>
         <p>Nome: {name}</p>
         <p>marca: {marca}</p>
         <p>Cor: {cor}</p>
        {desconto==0?(<p>Preço: {preco}</p>):(<p>Preço/desconto {preco-desconto}</p>)}
        </div>
    )
}

export default Card_car