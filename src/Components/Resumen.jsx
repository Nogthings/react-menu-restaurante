import { formatearDinero } from "../helpers";
import useMenu from "../hooks/useMenu"
import ResumenProductos from "./ResumenProductos";

export default function 
Resumen() {

  const {pedido, total} = useMenu();
  const comprobarPedido = () => pedido.length === 0;

  return (
    <aside className='w-72 h-screen overflow-y-scroll p-5'>
      <h1 className='text-xl font-semibold'>
        Mi pedido
      </h1>
      <div className="py-10">
        {pedido.length === 0 ? (
          <p className="text-center text-lg">
            Aun no hay elementos en tu pedido
          </p>
        ) : (
            pedido.map(producto => (
              <ResumenProductos
                key={producto.id}
                producto={producto}  
              />
            ))
        )}
      </div>
      <p className=" text-lg mt-10"> 
        Total: {''}
        {formatearDinero(total)}
      </p>
      <form className="w-full">
        <div className="mt-5">
          <input
            type="submit"
            value="Confirmar pedido"
            className={`${comprobarPedido() ? 
              'bg-indigo-100' : 
              'bg-indigo-600 hover:bg-indigo-800' }
               px-5 py-2 uppercase font-semibold text-white text-center w-full cursor-pointer`}
            disabled={comprobarPedido()}
            />
        </div>
      </form>
    </aside>
  )
}
