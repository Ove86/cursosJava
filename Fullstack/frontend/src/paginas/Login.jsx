import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">Inicia sesión y administra tus <span className="text-black">pacientes</span>
        </h1>
      </div>

      <div>
        <form>
          <div className="my-5">
            <label className="uppercasse text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="email" placeholder="Email de Registro" />
          </div>
          <div className="my-5">
            <label className="uppercasse text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" type="password" placeholder="Coloca tu Password" />
          </div>
          <input type="submit" value="Iniciar Sesion" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercasse font-bold mt-5 hover:bg-indigo-500 hover:cursor-pointer md:w-auto" />
        </form>
        <nav className='mt-10 lg:flex lg:justify-between'>
          <Link className='block text-center my-5 text-gray-500' to="/registrar">¿No tienes una cuenta? Regístrate</Link>
          <Link className='block text-center my-5 text-gray-500' to="/olvide-password">Olvidé mi contraseña</Link>
        </nav>
      </div>
        
    </>
  )
}

export default Login