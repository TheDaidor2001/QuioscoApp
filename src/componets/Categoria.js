import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

export const Categoria = ({ categoria }) => {
  const { nombre, icono, id } = categoria;
  const { categoriaActual, handleClickCategoria } = useQuiosco();

  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400 transition-colors`}>
      <Image
        width={100}
        height={100}
        alt="Imagen icono"
        src={`/assets/img/icono_${icono}.svg`}
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};
