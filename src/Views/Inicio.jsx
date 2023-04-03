import useSWR from 'swr'
import Producto from "../Components/Producto"
import clienteAxios from '../config/axios'
import { API_ENDPOINT } from '../services/api'
import useMenu from "../hooks/useMenu"

export default function Inicio() {

  const{categoriaActual} = useMenu()
  //consulta swr
  const fetcher = () => clienteAxios(API_ENDPOINT.PRODUCTOS).then(data => data.data)
  const {data, error, isLoading}= useSWR(API_ENDPOINT.PRODUCTOS, fetcher, {
    refreshInterval: 1000
  })

  if(isLoading) return 'cargando...';
  
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

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
