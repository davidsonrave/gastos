import { NavLink } from "react-router-dom";
import { v, LinksArray, SecondarylinksArray, SidebarCard } from "../../../index";

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
};

export function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <div
      className={`fixed h-full transition-all duration-200 bg-gray-800 text-white overflow-y-auto ${sidebarOpen ? "w-56" : "w-16"}`}
    >
      <button
        className="fixed top-16 left-10 w-8 h-8 rounded-full bg-gray-700 shadow-md flex items-center justify-center transition-all duration-200 z-20"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <v.iconoflechaderecha className="text-white" />
      </button>
      <div className="flex flex-col items-center pt-5">
        <div className="flex flex-col items-center mb-8">
          <img src={v.logo} className={`transition-transform duration-300 ${sidebarOpen ? "scale-75" : "scale-150"}`} />
          {sidebarOpen && <h2 className="mt-2 text-lg font-bold">Cerdys</h2>}
        </div>
        <nav className="w-full">
          {LinksArray.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 transition-all duration-200 hover:bg-gray-700 ${isActive ? "text-yellow-400 font-semibold" : "text-white"}`
              }
            >
              <span className="text-2xl">{icon}</span>
              <span className={`ml-3 transition-opacity ${sidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="my-4 w-full h-px bg-gray-600"></div>
        <nav className="w-full">
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 transition-all duration-200 hover:bg-gray-700 ${isActive ? "text-yellow-400 font-semibold" : "text-white"}`
              }
            >
              <span className="text-2xl">{icon}</span>
              <span className={`ml-3 transition-opacity ${sidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="my-4 w-full h-px bg-gray-600"></div>
        {sidebarOpen && <SidebarCard />}
      </div>
    </div>
  );
}
