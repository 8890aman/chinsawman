import './App.css'
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom'
import InkMouseFollower from './components/effects/InkMouseFollower'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
