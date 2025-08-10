import { Search } from "lucide-react";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search...",
}: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative flex items-center w-full max-w-md">
      <input
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full py-[7px] pl-10 pr-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 outline-none"
      />
      <Search size="18px" className="absolute left-3 text-gray-400" />
    </div>
  );
};

export default SearchBar;