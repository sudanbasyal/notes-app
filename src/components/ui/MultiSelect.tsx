import React, { useState, useRef, useEffect } from "react";

type MenuItem = {
  id: number;
  label: string;
  color: string; 
};

type MultiSelectProps = {
  items: MenuItem[];
  placeholder?: string;
  onChange?: (selected: MenuItem[]) => void;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  placeholder = "Select...",
  onChange,
}) => {
  const [selected, setSelected] = useState<MenuItem[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null); // Ref for outside click

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (item: MenuItem) => {
    let newSelected;
    if (selected.find((s) => s.id === item.id)) {
      newSelected = selected.filter((s) => s.id !== item.id);
    } else {
      newSelected = [...selected, item];
    }
    setSelected(newSelected);
    onChange?.(newSelected);
  };

  const isSelected = (id: number) => selected.some((s) => s.id === id);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-56">
      {/* Trigger */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="border rounded-lg px-3 py-2 flex items-center justify-between cursor-pointer bg-white"
      >
        
        <span className="text-gray-400">{placeholder}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-1 w-full border rounded-lg shadow bg-white z-10">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded-lg outline-none"
          />
          <div className="w-full border border-gray-100"/>
          <ul className="max-h-40 overflow-auto">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                onClick={() => toggleSelect(item)}
                className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  {item.label}
                </div>
                {isSelected(item.id) && (
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </li>
            ))}
            {filteredItems.length === 0 && (
              <li className="px-3 py-2 text-gray-400">No results</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
