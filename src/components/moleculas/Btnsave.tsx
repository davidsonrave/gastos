import { Icono } from "../../index";

type BtnSaveProps = {
  funcion: () => void;
  titulo: string;
  bgcolor: string;
  icono: React.ReactNode;
};

export function Btnsave({ funcion, titulo, bgcolor, icono }: BtnSaveProps) {
  return (
    <button
      type="submit"
      className="flex justify-center items-center gap-2 border-none text-decoration-none"
      style={{ backgroundColor: "initial" }}
    >
      <Icono>{icono}</Icono>
      <span
        onClick={funcion}
        className={`bg-[${bgcolor}] py-2 px-5 font-extrabold text-xl border-2 border-black rounded-lg shadow-sm transition-all duration-200 ease-in-out text-black cursor-pointer 
          hover:translate-x-1 hover:translate-y-1 hover:shadow-md active:translate-x-0.5 active:translate-y-0.5 active:shadow-sm`}
      >
        {titulo}
      </span>
    </button>
  );
}
