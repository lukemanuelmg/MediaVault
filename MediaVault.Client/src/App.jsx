import {Routes, Route} from 'react-router'
import HomePage from './pages/HomePage/HomePage.jsx'
import GamesPage from './pages/GamesPage/GamesPage.jsx'
import MoviesPage from './pages/MoviesPage/MoviesPage.jsx'
import TV_Page from './pages/MoviesPage copy/TV_Page.jsx'

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
