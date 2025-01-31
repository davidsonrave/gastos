import { Btnsave, v } from "../../../index";

export function SidebarCard() {
  const handleClick = () => {
    console.log("Botón clickeado");
  };

  return (
    <div className="w-full p-4 text-center relative">
      <span className="absolute text-3xl rounded-full top-[-8px] right-1/2 transform translate-x-1/2 z-10">
        <v.iconoayuda />
      </span>
      <div className="relative p-4 bg-[var(--bg5)] rounded-lg overflow-hidden">
        <div className="absolute bg-[var(--whiteBg)] rounded-full opacity-70 h-[100px] w-[100px] top-[-50px] left-[-50px]" />
        <div className="absolute bg-[var(--whiteBg)] rounded-full opacity-70 h-[130px] w-[130px] bottom-[-80px] right-[-70px]" />
        <h3 className="text-[1.1rem] mt-4 py-4 font-extrabold text-black">Centro de ayuda</h3>
        <div className="relative ml-[-8px]">
          
          <Btnsave titulo="Contactar" bgcolor="#f8f2fd" icono={<v.iconoayuda />} funcion={handleClick} />
        </div>
      </div>
    </div>
  );
}
