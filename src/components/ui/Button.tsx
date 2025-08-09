import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  type?: "button" | "submit";
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
  css?: string;
};

const Button = ({ type = "button", icon, text, onClick, css }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "inline-flex justify-center items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-200",
        css
      )}
    >
      {icon}
      <span
        className={cn("capitalize", {
          "hidden sm:inline": icon,
        })}
      >
        {text}
      </span>
    </button>
  );
};

export default Button;
