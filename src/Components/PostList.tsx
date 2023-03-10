/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react'
import { PostItem } from './PostItem'
import axios from 'axios'
import { SortSelector } from './SortSelector'
import { IPost, ISortOption } from '../utils/types/Post'

const PostList = () => {
  useEffect(() => {
    fetchPosts()
  }, [])

  const [posts, setPosts] = useState<IPost[]>([])
  const [sortOptions, setSortOptions] = useState<ISortOption[]>([
    { id: 2, title: 'By title ascending', sortField: 'title' },
    { id: 1, title: 'By title descending', sortField: 'title' },
    { id: 0, title: 'not selected', sortField: 'null' },
  ])
  const [currentOption, setCurrentOption] = useState<ISortOption>(
    sortOptions[2],
  )
  async function fetchPosts() {
    const { data } = await axios.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts',
    )
    setPosts((prev) => data)
  }
  const removePost = (post: any) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const sortPosts = async () => {
    let sorted: IPost[] = []
    if (currentOption.id === 1) {
      sorted = [...posts].sort((a, b) => a.title.localeCompare(b.title))
      setPosts((prev) => [...sorted])
    } else if (currentOption.id === 2) {
      sorted = [...posts].sort((a, b) => b.title.localeCompare(a.title))
      setPosts((prev) => [...sorted])
    } else if (currentOption.id === 0) {
      await fetchPosts()
    }
  }
  return (
    <>
      <SortSelector
        options={sortOptions}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
        sort={sortPosts}
        posts={posts}
      />
      {posts.length !== 0 ? (
        <div>
          {posts.map((post: { id: any }) => (
            <PostItem remove={removePost} key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="grid place-items-center mt-4 text-9xl">
          <h1>There is no posts...</h1>
        </div>
      )}
    </>
  )
}
export default PostList
