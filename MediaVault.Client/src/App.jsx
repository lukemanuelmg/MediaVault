import {Routes, Route} from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import GamesPage from './pages/GamesPage/GamesPage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import TV_Page from './pages/MoviesPage copy/TV_Page'

function App() {
  return (
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/games' element={<GamesPage/>}/>
      <Route path='/movies' element={<MoviesPage/>}/>
      <Route path='/tv' element={<TV_Page/>}/>

    </Routes>
  )
}

export default App
