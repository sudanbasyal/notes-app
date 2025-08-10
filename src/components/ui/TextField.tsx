import { useField } from "formik";
import React from "react";
import { cn } from "../../lib/utils";

interface TextFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  variant?: "bordered" | "ghost";
  css?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const textFieldVariants = {
  base: "w-full py-2 rounded-lg outline-none transition-all duration-200 focus:ring-2",
  variants: {
    bordered: {
      default:
        "border border-gray-300 bg-white focus:ring-primary/40 focus:border-primary/40",
      error:
        "border border-red-500 bg-white focus:ring-red-500 focus:border-red-500",
    },
    ghost: {
      default:
        "bg-transparent border border-transparent focus:border-primary/40 focus:ring-primary/40",
      error:
        "bg-transparent border border-transparent focus:border-red-500 focus:ring-red-500",
    },
  },
  padding: {
    withStartAdornment: "pl-10 pr-3",
    withEndAdornment: "pr-10 pl-3",
    both: "px-10",
    default: "px-3",
  },
};

const TextField = ({
  label,
  variant = "bordered",
  startAdornment,
  endAdornment,
  ...props
}: TextFieldProps) => {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;

  const getPaddingClasses = () => {
    if (startAdornment && endAdornment) {
      return textFieldVariants.padding.both;
    } else if (startAdornment) {
      return textFieldVariants.padding.withStartAdornment;
    } else if (endAdornment) {
      return textFieldVariants.padding.withEndAdornment;
    }
    return textFieldVariants.padding.default;
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.name}
          className="block mb-1 font-medium text-gray-700 text-left"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {startAdornment && (
          <div className="absolute left-3 text-gray-400 z-10">
            {startAdornment}
          </div>
        )}
        <input
          {...field}
          {...props}
          className={cn(
            textFieldVariants.base,
            textFieldVariants.variants[variant][hasError ? "error" : "default"],
            getPaddingClasses(),
            props.css
          )}
        />
        {endAdornment && (
          <div className="absolute right-3 text-gray-400 z-10">
            {endAdornment}
          </div>
        )}
      </div>
      {hasError && (
        <p className="text-sm text-red-500 mt-1 text-start">{meta.error}</p>
      )}
    </div>
  );
};

export default TextField;
