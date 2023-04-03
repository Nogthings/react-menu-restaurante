import {createRef, useState} from 'react'
import { Link } from "react-router-dom"
import Alerta from '../../Components/Alerta';
import { useAuth } from '../../hooks/useAuth';

export default function Register() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [errores, setErrores] = useState([]);
  const {registro} = useAuth({middleware: 'guest', url: '/'});

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }
    
    registro(datos, setErrores)
  }

  return (
    <>
        <h1 className="text-2xl font-bold">Crear Cuenta</h1>

        <div className="bg-white shadow-md rounded-md mt-5 px-5 py-10">
          <form noValidate
                onSubmit={handleSubmit}  
          >
            {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-slate-800">
                Nombre:
              </label>
              <input
                id="name" 
                type="text"
                className="mt-2 w-full p-3 bg-gray-50 border border-indigo-400 rounded focus:border-indigo-700"
                name="name"
                placeholder="Nombre completo"
                ref={nameRef}/>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-slate-800">
                Correo:
              </label>
              <input
                id="email" 
                type="email"
                className="mt-2 w-full p-3 bg-gray-50 border border-indigo-400 rounded focus:border-indigo-700"
                name="email"
                placeholder="correo@dominio.com"
                ref={emailRef}/>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-slate-800">
                Contraseña:
              </label>
              <input
                id="password" 
                type="password"
                className="mt-2 w-full p-3 bg-gray-50 border border-indigo-400 rounded focus:border-indigo-700"
                name="password"
                placeholder="Tu Contraseña"
                ref={passwordRef}/>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password_confirmation"
                className="text-slate-800">
                Confirmar Contraseña:
              </label>
              <input
                id="password_confirmation"  
                type="password"
                className="mt-2 w-full p-3 bg-gray-50 border border-indigo-400 rounded focus:border-indigo-700"
                name="password_confirmation"
                placeholder="Confirma tu Contraseña"
                ref={passwordConfirmationRef}/>
            </div>

            <input 
              type="submit"
              value="Registrar"
              className="bg-indigo-600 hover:bg-indigo-800 text-white px-4 py-2 rounded mt-5 cursor-pointer"/>
          </form>
        </div>

        <nav className="mt-5">
          <Link to="/auth">
            ¿Ya tienes cuenta? Inicia sesion
          </Link>
        </nav>
    </>
  )
}
