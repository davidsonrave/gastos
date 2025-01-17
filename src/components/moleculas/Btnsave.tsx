import { Icono } from "../../index";
import { IconType } from "react-icons";

interface BtnSaveProps {
  funcion?: () => void; // Hacer que la función sea opcional
  titulo: string; // Texto del botón
  bgcolor: string; // Color de fondo del botón
  icono: IconType; // Componente de ícono
}

export function BtnSave({ funcion, titulo, bgcolor, icono }: BtnSaveProps) {
  return (
    <button
      type="button"
      className="flex justify-center items-center gap-2 bg-transparent border-none"
      onClick={funcion}
    >
      <Icono IconComponent={icono} /> {/* Pasar el componente del ícono */}
      <span
        className="px-4 py-2 font-bold text-lg border-4 border-black rounded-lg shadow-[4px_4px_0px_0px] text-black cursor-pointer duration-200 hover:scale-105"
        style={{
          backgroundColor: bgcolor,
        }}
      >
        {titulo}
      </span>
    </button>
  );
}
