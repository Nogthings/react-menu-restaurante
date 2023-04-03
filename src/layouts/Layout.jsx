import { Outlet } from "react-router-dom"
import Modal from "react-modal"
import { ToastContainer } from "react-toastify"
import ModalProducto from "../Components/ModalProducto"
import Sidebar from "../Components/Sidebar"
import Resumen from "../Components/Resumen"
import useMenu from "../hooks/useMenu"
import { useAuth } from "../hooks/useAuth"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')

export default function Layout() {

  const {user, error} = useAuth({middleware: 'auth'})
  const {modal} = useMenu();

  return (
    <>
      <div className="md:flex">
        <Sidebar />
          <main className='flex-1 h-screen overflow-y-scroll overflow-hidden bg-gray-100 p-3'>
            <Outlet/>
          </main>
        <Resumen />
      </div>
      <Modal 
        isOpen={modal}
        style={customStyles}>
          <ModalProducto/>
      </Modal>

      <ToastContainer/>

    </>
  )
}
