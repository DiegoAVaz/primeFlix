import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3
// URL da api: /movie/now_playing?api_key=a6f76ab846f85e8db0defd9867632950&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api