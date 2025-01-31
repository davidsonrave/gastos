import { ReactNode } from "react";

interface IconoProps {
  color?: string;
  children: ReactNode;
}

export function Icono({ color = "text-white", children }: IconoProps): JSX.Element {
  return <span className={color}>{children}</span>;
}
