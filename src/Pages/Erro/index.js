import { Link } from "react-router-dom"
import './style.css'

function Erro(){
    return(
        <div className="notFound">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            
            <Link to='/'>Clique aqui para ver os filmes!</Link>
        </div>
    )
}

export default Erro