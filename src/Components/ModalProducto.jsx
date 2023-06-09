import { useState, useEffect } from "react";
import useMenu from "../hooks/useMenu";
import { formatearDinero } from "../helpers";

export default function ModalProducto() {

  const { producto, handleClickModal, handleAgregarProductoPedido, pedido } = useMenu();
  const [cantidad, setCantidad] = useState(1);
  const [descripcion, setDescripcion] = useState("");
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if(pedido.some(pedidoState => pedidoState.id === producto.id )) {
        const productoEdicion = pedido.filter( pedidoState => pedidoState.id === producto.id)[0]

        setCantidad(productoEdicion.cantidad)
        setEdicion(true)
    } 
  }, [pedido])

  useEffect(() => {
    setDescripcion(producto.descripcion || "");
  }, [producto]);
  

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`imagen producto ${producto.nombre}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button
            onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-2xl font-semibold ">
            {producto.nombre}
        </h1>
        <p className="mt-5 font-black text-4xl text-indigo-800">
            {formatearDinero(producto.precio)}
        </p>
        <div className="flex gap-4 mt-5">
            <button
            type="button"
            onClick={() => {
                if(cantidad <= 1) return
                setCantidad(cantidad-1)
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
            <p className="text-3xl">{cantidad}</p>
            <button
                type="button"
                onClick={() => {
                    if(cantidad >= 10) return
                    setCantidad(cantidad+1)
                }}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
        <div className="mt-5">
            <label 
            className="text-xl mt-5 "
            htmlFor="description">
                Detalles de la orden:
            </label>
            <textarea 
            className="w-full border border-indigo-500 mt-2 p-2"
            name="description" 
            id="description" 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            cols="30" rows="5"
            placeholder="Aqui puede detallar su orden si quiere modificar algun ingrediente del platillo">

            </textarea>
        </div>
        <button
        onClick={() =>{
            handleAgregarProductoPedido({...producto, cantidad, descripcion: descripcion})
            handleClickModal()
        }}
        type="button"
        className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white uppercase font-semibold">
            {edicion ? 'Guardar cambios' : 'Agregar al pedido'}
        </button>
      </div>
    </div>
  );
}
