import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Filme from './Pages/Filmes'
import Header from './Components/Header'
import Erro from './Pages/Erro'
import Favoritos from './Pages/Favoritos'

function RouterApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/filme/:id' element={<Filme/>} />
                <Route path='/favoritos' element={<Favoritos/>} />

                <Route path='*' element={<Erro/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default RouterApp