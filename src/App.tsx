import { MyRoutes } from "./index";
import { createContext, useState } from "react";
import { Light, Dark, AuthContextProvider } from "./index";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


type themeProps = { 
  setTheme: React.Dispatch<React.SetStateAction<string>>; 
  theme: string; 
}
export const ThemeContext = createContext<themeProps | null>(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const [ sidebarOpen, setSidebarOpen ] = useState(false)
  

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MyRoutes />
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;