
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
                    <input type="submit" value="Enviar" />
                </form>
        </div>
    )
}

export default MyForms