import { Link } from "react-router-dom"

export default function Register() {
  return (
    <>
        <h1 className="text-2xl font-bold">Crear Cuenta</h1>

        <div className="bg-white shadow-md rounded-md mt-5 px-5 py-10">
          <form action="" noValidate>
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
                placeholder="Nombre completo"/>
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
                placeholder="correo@dominio.com"/>
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
                placeholder="Tu Contraseña"/>
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
                placeholder="Confirma tu Contraseña"/>
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
