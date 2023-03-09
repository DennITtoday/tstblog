import { Route, Routes } from 'react-router-dom'
import About from './About'
import PostList from './PostList'
import Login from './auth/login'
import Register from './auth/registr'


const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="PostList" element={<PostList />} />
        <Route path="login" element={<Login />} />
        <Route path="registr" element={<Register />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  )
}
export default Navigation
