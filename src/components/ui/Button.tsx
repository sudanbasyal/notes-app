import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  type?: "button" | "submit";
  icon?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  css?: string;
  disabled?: boolean;
  variant?: "primary" | "ghost";
};

const Button = ({
  type = "button",
  icon,
  text,
  onClick,
  css,
  disabled = false,
  variant = "primary",
}: Props) => {
  const buttonVariants = {
    base: "inline-flex justify-center items-center gap-2 px-4 py-2",
    variants: {
      primary:
        "bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-200",
      ghost:
        "bg-white text-black rounded-md hover:bg-primary/5 transition-colors duration-200 border border-text-reading-1 p-2.5",
    },
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonVariants.base, buttonVariants.variants[variant], css)}
    >
      {icon}
      {text && (
        <span
          className={cn("capitalize", {
            "hidden md:inline": icon,
          })}
        >
          {text}
        </span>
      )}
    </button>
  );
};

export default Button;
