import { productos as data } from "../data/productos"
import Producto from "../Components/Producto"
import useMenu from "../hooks/useMenu"

export default function Inicio() {

  const{categoriaActual} = useMenu()
  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)


  return (
    <>
      <h1 className="text-2xl font-black">
        {categoriaActual.nombre}
      </h1>
      <p className="text-2xl my-10">
        Elige tu pedido a continuación
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productos.map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
            />
        ))}
      </div>
    </>
  )
}
