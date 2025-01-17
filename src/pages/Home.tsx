
import { useAuthStore, UserAuth } from "../index";
export const Home = ()=>  {
  const { signout } = useAuthStore();
  const { user } = UserAuth();
  return (
    <div className="h-screen">
      <h1>Bienvenido Home {user.full_name}</h1>
      <img src={user.picture}/>
      <button onClick={signout}>Cerrar</button>
    </div>
  );
}
