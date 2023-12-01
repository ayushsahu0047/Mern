import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home.jsx'
import MovieList from './components/MovieList/MovieList'
import MovieDetail from './pages/MovieDetail/MovieDetail'

function App() {
  return (
    <>
    <div className="App">
        <Router>
          <Header/>
          
            <Routes>
                <Route index element= {<Home/>}></Route>
                <Route path='movie/:id' element= {<MovieDetail/>}></Route>
                <Route path='movies/:type' element= {<MovieList/>}></Route>
                <Route path='/*' element= {<h2>Error 404. Page Not Found</h2>}></Route>
            </Routes>
        </Router>
    </div>
    </>
  )
}

export default App
