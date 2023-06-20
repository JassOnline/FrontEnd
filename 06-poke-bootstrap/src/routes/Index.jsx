import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import PokemonDetail from '../pages/PokemonDetail'

//Lo que venga despues de Pokemon, lo guardo como id en la linea 12
const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/pokemon/:id' element={<PokemonDetail/>} /> 
    </Routes>
  )
}

export default RoutesIndex