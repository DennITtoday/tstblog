import { useState } from 'react'

const PostCreation = () => {
  return (
    <div className="grid place-items-center mt-24">
      <div className="p-8 rounded-lg max-w-2xl w-11/12 shadow-2xl max-h-2x bg-base-200">
        <PostCreationHeader />
        <PostCreationForm />
      </div>
    </div>
  )
}

const PostCreationHeader = () => {
  return (
    <div className='grid place-items-center'>
      <text className="text-4xl font-bold my-2">
        Создание поста
      </text>
    </div>
  )
}

const PostCreationForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  return (
    <div className="pt-4">
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Введите название поста</span>
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter post title..."
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Введите описание поста</span>
          </label>
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Enter your post text..."
            className="input input-bordered w-full"
          />
        </div>
        <div className="pt-4">
          <button className="btn rounded-xl btn-xs sm:btn-sm md:btn-md w-full">
            <label htmlFor="my-modal-6">Создать</label>
          </button>
        </div>
      </form>
    </div>
  )
}
export default PostCreation
