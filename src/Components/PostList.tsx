import { useEffect, useState } from 'react'
import { PostItem } from './PostItem'
import { SortSelector } from './SortSelector'
import { IPost, ISortOption } from '../utils/types/Post'
import PostService from '../APi/PostService'
import { getPageCount, getPagesArray } from '../utils/Pages'

const PostList = () => {
  useEffect(() => {
    fetchPosts(limit, page)
  }, [])
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<IPost[]>([])
  const [sortOptions, setSortOptions] = useState<ISortOption[]>([
    { id: 0, title: 'not selected', sortField: 'null' },
    { id: 1, title: 'By title descending', sortField: 'title' },
    { id: 2, title: 'By title ascending', sortField: 'title' },
  ])
  const [currentOption, setCurrentOption] = useState<ISortOption>(
    sortOptions[0],
  )
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  let pagesArray = getPagesArray(totalPages)

  async function fetchPosts(limit:number, page:number) {
    setIsLoading(true)
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
    setIsLoading(false)
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
      await fetchPosts(limit,page)
    }
  }
  const changePage = (page:any) => {
    setPage(page)
    fetchPosts(limit,page)
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
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <div>
              {posts.map((post: { id: any }) => (
                <PostItem remove={removePost} key={post.id} post={post} />
              ))}
              <div className='flex justify-center'>
                {pagesArray.map((p: any) => (
                  <div className="btn-group m-2 ">
                    <button
                      key={p}
                      onClick={() => changePage(p)}
                      className={page === p ? 'btn btn-active' : 'btn'}
                    >
                      {p}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
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
