import React, { useState, useRef, useEffect } from "react";
import { Category } from "../../interface/category";
import { TagIcon } from "lucide-react";

type MultiSelectProps = {
  items: Category[];
  placeholder?: string;
  onChange?: (selected: Category[]) => void;
  value?: number[];
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  onChange,
  value = [],
}) => {
  const [selected, setSelected] = useState<Category[]>(() => {
    return items.filter((item) => value.includes(item.id));
  });

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null); // Ref for outside click

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSelect = (item: Category) => {
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
        setSearch("");
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
      >
        <TagIcon size="12px" />
        Add Category
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-full left-0 mb-2 mt-1 w-56 border rounded-lg shadow-lg bg-white z-10">
          <div className="p-2 border-b">
            <input
              type="text"
              placeholder="Search Categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 bg-gray-50 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <ul className="max-h-64 overflow-auto py-1">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                onClick={() => toggleSelect(item)}
                className="flex items-center justify-between px-3 py-2 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span className="text-sm">{item.name}</span>
                </div>
                {isSelected(item.id) && (
                  <svg
                    className="w-4 h-4 text-primary"
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
              <li className="px-3 py-2 text-sm text-gray-400">
                No categories found
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
