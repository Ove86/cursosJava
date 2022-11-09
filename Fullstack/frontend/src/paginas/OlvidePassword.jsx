import { useState } from "react"
import { Link } from "react-router-dom"
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';

const OlvidePassword = () => {
  const [email,setEmail] = useState('');
  const [alerta,setAlerta] =


  const handleSubmit = async ()=> {
    e.preventDefault()
    if(email ===""){
      setAlerta({msg:'El Email es obligatorio', error: true})
      return
    }
  }
  const {msg} = alerta

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">Recupera tu acceso y no pierdas{""} <span className="text-black"> tus pacientes</span>
        </h1>
      </div>

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded bg-white'>
          {msg && <Alerta
            alerta={alerta}
            />}
        <form
          onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercasse text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              type="email" 
              placeholder="Tu email"
              value={email}
              onChange= {e=> setEmail(e.target.value)} />
          </div>          
          <input type="submit" value="Enviar instrucciones" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercasse font-bold mt-5 hover:bg-indigo-500 hover:cursor-pointer md:w-auto" />
        </form>
        <nav className='mt-10 lg:flex lg:justify-between'>
          <Link className='block text-center my-5 text-gray-500' to="/registrar">¿No tienes una cuenta? Regístrate</Link>
          <Link className='block text-center my-5 text-gray-500' to="/">Iniciar sesión</Link>
        </nav>      
      </div>
    </>
  )
}

export default OlvidePassword