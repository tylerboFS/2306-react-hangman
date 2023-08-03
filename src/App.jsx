import './App.css'
import Game from './components/Game'
import Instructions from "./components/Instructions"
import NavBar from "./components/NavBar"
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </>
        
  )
}

export default App
