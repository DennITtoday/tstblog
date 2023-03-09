import { useEffect, useState } from 'react'
import { PostItem } from './PostItem'
import axios from 'axios'

const PostList = () => {
  useEffect(() => {
    fetchPosts()
  }, [])

  const [posts, setPosts] = useState([{id:1}])
  async function fetchPosts() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    setPosts(response.data)
  }
  const removePost = (post:any) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  return (
    <>
      <div>
        {posts.map((post: { id: any }) => (
          <PostItem remove={removePost} key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
export default PostList
