import { IconType } from "react-icons";

interface IconoProps {
  color?: string; // Color opcional
  IconComponent: IconType; // Componente de ícono de react-icons
}

export const Icono = ({ color = "inherit", IconComponent }: IconoProps) => {
  return (
    <span
      className="inline-block"
      style={{
        color, 
      }}
    >
      <IconComponent size={24} /> 
    </span>
  );
};
