import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "../index";

interface AuthContextType {
  user: unknown | null; 
  login: (username: string) => void;
  logout: () => void;
}
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }:AuthContextProviderProps) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event,session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          console.log("event",event);
          console.log("session",session?.user.user_metadata

          );
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};