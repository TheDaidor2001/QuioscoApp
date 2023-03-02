import Head from "next/head";
import Modal from "react-modal";
import { Sidebar } from "@/componets/Sidebar";
import { Pasos } from "@/componets/Pasos";
import { ModalProducto } from "@/componets/ModalProducto";
import { ToastContainer } from "react-toastify";
import useQuiosco from "@/hooks/useQuiosco";


import 'react-toastify/dist/ReactToastify.css'



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

Modal.setAppElement("#__next");

export default function Layout({ children, pagina }) {
  const { modal } = useQuiosco();

  return (
    <>
      <Head>
        <title>{pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex ">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen overflow-y-scroll overflow-hidden scrollbar-hide">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Pasos />
            {children}
          </div>
        </main>
      </div>

      {
        <Modal
          isOpen={modal}
          style={customStyles}
          contentLabel="Modal Producto"
        >
          <ModalProducto />
        </Modal>

      }
      <ToastContainer />
    </>
  );
}
