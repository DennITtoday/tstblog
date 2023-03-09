import { useState } from 'react'

const Register = () => {
  return (
    <div className=" grid place-items-center mt-24">
      <div className="p-8 rounded-lg max-w-2xl w-auto shadow-2xl max-h-2x bg-base-200">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </div>
  )
}

const RegisterHeader = () => {
  return (
    <div className="text-center">
      <text className="text-4xl font-bold text-center  my-2  w-96">
        Регистрация
      </text>
    </div>
  )
}

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  return (
    <div className="pt-4">
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Введите адрес эл. почты</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Введите email"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Введите пароль</span>
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Введите пароль"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Повторите ввод</span>
          </label>
          <input
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            type="password"
            placeholder="Введите пароль"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="pt-4">
          <button className="btn rounded-xl btn-xs sm:btn-sm md:btn-md w-full">
            Войти
          </button>
        </div>
      </form>
    </div>
  )
}
export default Register
