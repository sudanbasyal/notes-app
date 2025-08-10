import { useField } from "formik";
import { Eye, EyeOff } from "lucide-react"; // Add this import
import React, { useState } from "react"; // Add useState
import { cn } from "../../lib/utils";
import { textFieldVariants } from "../../constants/textFieldVariants";

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



const TextField = ({
  label,
  variant = "bordered",
  startAdornment,
  endAdornment,
  type = "text",
  ...props
}: TextFieldProps) => {
  const [field, meta] = useField(props.name);
  const [showPassword, setShowPassword] = useState(false);
  const hasError = meta.touched && meta.error;

  const getPaddingClasses = () => {
    if (startAdornment && (endAdornment || type === "password")) {
      return textFieldVariants.padding.both;
    } else if (startAdornment) {
      return textFieldVariants.padding.withStartAdornment;
    } else if (endAdornment || type === "password") {
      return textFieldVariants.padding.withEndAdornment;
    }
    return textFieldVariants.padding.default;
  };

  const renderPasswordToggle = () => {
    if (type !== "password") return null;

    return (
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
      >
        {showPassword ? (
          <EyeOff size={18} className="cursor-pointer" />
        ) : (
          <Eye size={18} className="cursor-pointer" />
        )}
      </button>
    );
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
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          className={cn(
            textFieldVariants.base,
            textFieldVariants.variants[variant][hasError ? "error" : "default"],
            getPaddingClasses(),
            props.css
          )}
        />
        {type === "password" ? renderPasswordToggle() : endAdornment && (
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
