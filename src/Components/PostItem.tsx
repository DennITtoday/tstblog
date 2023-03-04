
import { IPost } from '../utils/types/Post'

const PostItem = ({ post }: { post: IPost }) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  )
}
export default PostItem
