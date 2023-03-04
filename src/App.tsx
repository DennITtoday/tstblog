import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/auth/login'
import Register from './Components/auth/registr'
import About from './Components/About'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="registr" element={<Register />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
