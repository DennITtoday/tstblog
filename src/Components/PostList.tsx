import { IPost } from '../utils/types/Post'
import PostItem from './PostItem'

type PostListProps = {
  map(arg0: (post: any) => JSX.Element): import('react').ReactNode
  users: IPost[]
}

const PostList = ({ posts }: { posts: PostListProps }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
export default PostList
