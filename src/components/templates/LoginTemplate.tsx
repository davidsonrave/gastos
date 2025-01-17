import { BtnSave, v, useAuthStore } from "../../index";
import { FaGoogle } from "react-icons/fa";

export const LoginTemplate = () => {
  const { signInWithGoogle } = useAuthStore();
  return (
    <div
      style={{
        backgroundImage: `url(${v.imagenfondo})`,
      }}
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white text-center"
    >
      <div className="bg-[#131313] rounded-2xl flex flex-col gap-7 m-5 p-5 shadow-sm">
        <span className="text-[#727272] text-start">Versión 1.0</span>
        <div className="">
          <img src={v.logo} className="max-w-[60%]  m-auto nimate-flotar"/>
        </div>
        <h1 className="font-bold text-7xl">Control de Gastos</h1>
        <p className="text-[#909090] text-lg">Toma el control de tus gastos e ingresos</p>
        <div className="flex justify-center">
          <BtnSave
            titulo="Iniciar con Google"
            icono={FaGoogle}
            bgcolor={v.colorSecundario}
            funcion={signInWithGoogle}
          />
        </div>
      </div>
    </div>
  );
};
