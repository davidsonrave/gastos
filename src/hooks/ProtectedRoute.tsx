import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  user: unknown
  redirectTo:string
  children: React.ReactNode;
  
}

export const ProtectedRoute = ({ user, redirectTo, children  } : ProtectedRouteProps) => {
  if (user == null) return <Navigate replace to={redirectTo} />;
  return children ? children : <Outlet />;
};