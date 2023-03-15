import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../APi/PostService'
import { IPost } from '../utils/types/Post'
import { IComment } from '../utils/types/Comments'

const PostID = () => {
  const params = useParams()
  const [post, setPost] = useState<IPost | null>(null)
  const [comments, setComments] = useState<IComment[]>([])
  async function fetchPostByID(id: any) {
    const response = await PostService.getByID(params.id)
    setPost(response.data)
  }
  async function fetchCommentsByID(id: any) {
    const response = await PostService.getCommentsByID(params.id)
    setComments(response.data)
  }
  useEffect(() => {
    fetchCommentsByID(params.id)
    fetchPostByID(params.id)
  })

  // console.log(post)
  // console.log(params) //if we want to see in logo postID when we click OPEN button
  return (
    <>
      <div className="m-4">
        PostID:{params.id}
        <div>
          <div>Post tittle: {post?.title}</div>
          {post?.body}
        </div>
      </div>
      <div>
        {comments.map((comment) => (
          <div className="m-4">
            <h1>{comment.email}</h1>
            <div>{comment.body}</div>
          </div>
        ))}
      </div>
    </>
  )
}
export default PostID
