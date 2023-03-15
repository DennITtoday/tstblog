import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../APi/PostService'
import { IPost } from '../utils/types/Post'

const PostID = () => {
  const params = useParams()
  const [post, setPost] = useState<IPost | null>(null)

  async function fetchPostByID(id: any) {
    const response = await PostService.getByID(params.id)
    setPost(response.data)
  }
  useEffect(() => {
    fetchPostByID(params.id)
  })

    // console.log(post)
    // console.log(params) //if we want to see in logo postID when we click OPEN button
  return (
    <>
      HUI {params.id}
      <div>
        {post?.id} {post?.body}
      </div>
    </>
  )
}
export default PostID
