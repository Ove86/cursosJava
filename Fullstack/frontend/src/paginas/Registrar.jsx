import { useState } from "react"
import { Link } from "react-router-dom"
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta"


const Registrar = () => {
  
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')

  const [alerta,setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();
    if([nombre,email,password,repetirPassword].includes('')){
      setAlerta({msg:'Hay campos vacios', error:true})
      return;
    }
    if(password !== repetirPassword){
      setAlerta({msg:'Los password deben ser iguales', error:true})
      return
    }
    if(password.length <6){
      setAlerta({msg:'El password es muy corto, agrega mínimo 6 carácteres', error:true})
      return
    }
    setAlerta({})

    //Crear el usuario en el API
    try {
      await clienteAxios.post('/veterinarios', {nombre,email,password})
      setAlerta({
        msg: 'Creado correctamente, revisa tu email',
        error:false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error:true
      })
    }
  }
  const {msg} = alerta
  
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-5xl">Crea tu cuenta y administra{""} <span className="text-black"> tus pacientes</span>
        </h1>
      </div>

      <div className='mt-2 md:mt-5 shadow-lg px-5 py-5 rounded bg-white'>
        
        {msg && <Alerta
        alerta={alerta}
        />}
        <form
          onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercasse text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              type="text" 
              placeholder="Tu nombre"
              value={nombre}
              onChange= {e=> setNombre(e.target.value)}
              />
          </div>
          <div className="my-5">
            <label className="uppercasse text-gray-600 block text-xl font-bold">
              Email
            </label>
            <input 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              type="email"
              placeholder="Tu email"
              value={email}
              onChange= {e=> setEmail(e.target.value)}
              />
          </div>
          <div className="my-5">
            <label className="uppercasse text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              type="password" 
              placeholder="Coloca tu Password"
              value={password}
              onChange= {e=> setPassword(e.target.value)}
              />
          </div>
          <div className="my-5">
            <label className="uppercasse text-gray-600 block text-xl font-bold">
              Repetir Password
            </label>
            <input 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl" 
              type="password" 
              placeholder="Repite tu Password"
              value={repetirPassword}
              onChange= {e=> setRepetirPassword(e.target.value)}
              />
          </div>
          <input type="submit" value="Crear cuenta" className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercasse font-bold mt-5 hover:bg-indigo-500 hover:cursor-pointer md:w-auto" />
        </form>
        <nav className='mt-10 lg:flex lg:justify-between'>
          <Link className='block text-center my-4 text-gray-500' to="/">¿Ya tienes una cuenta? Inicia sesión</Link>
          <Link className='block text-center my-4 text-gray-500' to="/olvide-password">Olvidé mi contraseña</Link>
        </nav>
      </div>
    </>
  )
}

export default Registrar