import Layout from "@/layout/Layout";
import { useEffect, useCallback } from "react";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "";
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido]);

  

  return (
    <Layout pagina={"Total y Confirmar Pedido"}>
      <h1 className="text-4xl font-black ">Resumen</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label className="block text-slate-800 text-xl" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar {""} <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${comprobarPedido() ? 'bg-indigo-300' : 'bg-indigo-600 hover:bg-indigo-800'}  w-full lg:w-auto py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirmar pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
