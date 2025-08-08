import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  css?: string;
};

const Button = ({ icon, text, onClick, css }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex justify-center items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors duration-200",
        css
      )}
    >
      {icon}
      <span className="hidden sm:inline capitalize">{text}</span>
    </button>
  );
};

export default Button;
