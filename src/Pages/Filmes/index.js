import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../Services/api"
import './style.css'
import {toast} from 'react-toastify'

function Filme(){

    const {id} = useParams()
    const navigate = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: 'a6f76ab846f85e8db0defd9867632950',
                    language: 'pt-BR',
                }
            })
            .then((res)=>{
                setFilme(res.data)
                setLoading(false)
            })
            .catch(() => {
                console.log('Filme não encontrado')
                navigate('/', {replace: true})
                return
            })
        }
        loadFilme()

        return () => {
            console.log('Componente desmontado')
        }
    }, [navigate, id])

    if (loading){
        return(
            <div className="filmeInfo">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeFlix')
        let filmesSalvos = JSON.parse(minhaLista) || []
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
        if (hasFilme){
            toast.warn('Esse filme já está na lista')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso')
    }

    return(
        <div className="filmeInfo">
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className="areaButtons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme