import { useEffect, useState } from 'react'
import { PostItem } from './PostItem'
import axios from 'axios'

const PostList = () => {
  useEffect(() => {
    fetchPosts()
  }, [])

  const [posts, setPosts] = useState([])
  async function fetchPosts() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    setPosts(response.data)
  }
  
  return (
    <>
      <div>
        {posts.map((post: { id: any }) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
export default PostList
