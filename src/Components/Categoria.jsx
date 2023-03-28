import useMenu from "../hooks/useMenu"

export default function Categoria({categoria}) {

    const {handleClickCategoria, categoriaActual} = useMenu();
    const{icono, id, nombre} = categoria
    const resaltarCategoria = () => categoriaActual.id === id ? 'bg-indigo-500' : 'bg-white'

  return (
    <div className={`${resaltarCategoria()} flex items-center gap-4 w-full p-3 hover:bg-indigo-500 cursor-pointer`}>
        <img 
            className='w-12 '
            src={`/img/icono_${icono}.svg`} 
            alt="imagen icono" />
        <button 
          type="button"
          onClick={() => handleClickCategoria(id)}
          className='text-lg font-bold cursor-pointer truncate'
        >
          {nombre}
        </button>
    </div>
  )
}
