import { MyRoutes, Sidebar, Light, Dark, AuthContextProvider } from "./index";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type themeProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  theme: string;
};
export const ThemeContext = createContext<themeProps | null>(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <div className="grid grid-cols-1  md:grid-cols-[65px_1fr] ">
              <div className="hidden md:block">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
              </div>

              <div className="col-start-1 md:col-start-2 w-full">
                <MyRoutes />
              </div>
            </div>
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
