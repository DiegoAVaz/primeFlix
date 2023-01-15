import { useEffect, useState } from "react"
import api from "../../Services/api"
import { Link } from "react-router-dom"
import './style.css'

function Home(){

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        async function loadFilmes(){
            const response = await api.get('/movie/now_playing', {
                params: {
                    api_key: 'a6f76ab846f85e8db0defd9867632950',
                    language: 'pt-BR',
                    page: '1'
                }
            })
        // console.log(response.data.results.slice(0, 10))
        setFilmes(response.data.results.slice(0, 10))
        setLoading(false)
        }

        loadFilmes()

    }, [])

    if(loading){
        return(
            <div className="loading">
                <h3>Carregando filmes...</h3>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="listaFilmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home