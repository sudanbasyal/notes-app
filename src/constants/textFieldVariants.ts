export const textFieldVariants = {
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