import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Login from './Components/auth/login'
import Register from './Components/auth/registr'
import Layout from './Components/Layout'
import PostList from './Components/PostList'
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='PostList' element={PostList}/>
          <Route path="login" element={<Login />} />
          <Route path="registr" element={<Register />} />
          <Route path="About" element={<About />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
