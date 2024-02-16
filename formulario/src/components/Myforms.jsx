
import './Myforms.css'

const MyForms = () =>{
    return(
        <div>
                {/*Criaçao de form*/ }
                <form>
                    <div>
                        <label htmlFor="name">nome</label>
                        <input type="text" name="name" placeholder="digite seu nome" />
                    </div>
                    
                {/*label envolvendo input*/}
                <label htmlFor="email">
                    <span>E-mall</span>
                    <input type="email" name="email" placeholder='digite o seu email' />
                </label>
                    <input type="submit" value="Enviar" />
                </form>

        </div>
    )
}

export default MyForms