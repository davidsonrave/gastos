import { Btnsave, v, useAuthStore } from "../../index";

export function LoginTemplate(){
  const { signInWithGoogle } = useAuthStore();

  return (
    <div
      className="h-screen flex items-center justify-center text-white text-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${v.imagenfondo})` }}
    >
      <div className="bg-[#131313] rounded-2xl gap-8 flex flex-col p-5 m-5 shadow-lg shadow-black/35">
        <span className="text-gray-500 text-left">versión 1.0</span>
        <div className="flex justify-center">
          <img
            src={v.logo}
            className="max-w-[60%] animate-floating"
            alt="Logo"
          />
        </div>
        <span className="text-5xl font-bold">Cerdyn</span>
        <p className="text-gray-400 text-xl">
          Toma el control de tus 💵gastos e 💰ingresos
        </p>
        <div className="flex justify-center">
          <Btnsave
            titulo="Iniciar con google"
            icono={<v.iconogoogle />}
            bgcolor={v.colorSecundario}
            funcion={signInWithGoogle}
          />
        </div>
      </div>
      
    </div>
  );
}
