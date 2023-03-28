import { formatearDinero } from "../helpers";
import useMenu from "../hooks/useMenu";

export default function Producto({producto}) {

    const {handleClickModal, handleSetProducto} = useMenu();
    const {nombre, imagen, precio} = producto;

  return (
    <div className="border p-3 shadow bg-white">
        <img 
            className="w-full"
            src={`/img/${imagen}.jpg`}
            alt="imagen producto" />
        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-3xl text-indigo-700">
                {formatearDinero(precio)}
            </p>
            <input 
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-semibold"
                value="Agregar"
                onClick={ () => {
                    handleClickModal();
                    handleSetProducto(producto);
                }}/>
        </div>
    </div>
  )
}
