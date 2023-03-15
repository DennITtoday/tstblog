import { Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import PostList from './PostList'
import Login from './auth/login'
import Register from './auth/registr'
import PostCreation from './PostCreation'
import PostID from '../pages/PostID'

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="PostCreation" element={<PostCreation />} />
        <Route path="PostList" element={<PostList />} />
        <Route path="login" element={<Login />} />
        <Route path="registr" element={<Register />} />
        <Route path="About" element={<About />} />
        <Route path="/posts/:id" element={<PostID/>}/>
      </Routes>
    </>
  )
}
export default Navigation
