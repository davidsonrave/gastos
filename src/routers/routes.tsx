import { Routes, Route} from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth } from "../index";
export const  MyRoutes = ()=> {
  const { user } = UserAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" children={undefined} />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}