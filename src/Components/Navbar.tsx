import { Link } from 'react-router-dom'
import PostCreation from './PostCreation'

const Navbar = () => {
  return (
    <div
      className="
            flex
            shadow-lg
            p-4"
    >
      <Link to="/PostList">
        <button className="btn m-2 sm:btn-sm md:btn-md lg:btn-lg">
          Главная
        </button>
      </Link>

      <div className="pt-2"></div>
      <div className="flex-1 pt-2"></div>

      <Link to="/login">
        <button className="btn m-2 sm:btn-sm md:btn-md lg:btn-lg">Войти</button>
      </Link>

      <Link to="/registr">
        <button className="btn m-2 sm:btn-sm md:btn-md lg:btn-lg">
          Зарегестрироваться
        </button>
      </Link>
      <label
        htmlFor="my-modal-4"
        className="btn m-2 sm:btn-sm md:btn-md lg:btn-lg"
      >
        Создать пост
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <PostCreation />
      </label>

      <Link to="/About">
        <button className="btn m-2 sm:btn-sm md:btn-md lg:btn-lg">
          Об авторе
        </button>
      </Link>
    </div>
  )
}
export default Navbar
