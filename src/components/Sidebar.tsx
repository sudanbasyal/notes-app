import { useLocation } from "react-router-dom";
import { labels, topMenu } from "../constants/menu-data";
import { useGetAllCategoriesQuery } from "../features/category/categoryService";
import { Category } from "../interface/category";
import { MenuItem } from "../interface/sidebar";
import { cn } from "../lib/utils";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import { setCategoryId, setOrder, setSortBy } from "../features/note/noteSlice";
import { SortField } from "../interface/note";
import { useTypedSelector } from "../store";
import { sortOptions } from "../constants/sortOptions";
import { SortAsc, SortDesc } from "lucide-react";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { data, isLoading } = useGetAllCategoriesQuery();
  const { sortBy, orderBy } = useTypedSelector((state) => state.note);
  const categories = data?.categories;

  const handleClick = (path?: string) => {
    if (path && path === "/notes") return;
    dispatch(openModal({ type: "edit-categories" }));
  };

  const renderMenuItem = (item: MenuItem) => {
    const Icon = item.icon;
    return (
      <button
        key={item.title}
        onClick={() => {
          handleClick(item?.path);
        }}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 w-full text-left",
          {
            "bg-gray-100": item.path && pathname === item?.path,
          }
        )}
      >
        <Icon size={18} />
        <span>{item.title}</span>
      </button>
    );
  };

  const renderCategoryItem = (category: Category) => (
    <button
      key={category.id}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 w-full text-left capitalize"
      onClick={() => {
        dispatch(setCategoryId(category.id));
      }}
    >
      <span className={cn("w-2 h-2 rounded-full", category.color)} />
      {category.name}
    </button>
  );

  if (isLoading) {
    //TODO add a skeleton
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg md:mx-4 p-3 h-auto flex-col gap-8">
      {/* Top Menu */}
      <div className="space-y-2">{topMenu.map(renderMenuItem)}</div>

      <hr className="my-2" />

      {/* Filters */}
      <div>
        <h4 className="text-sm text-reading-1 font-semibold mb-2">Filters</h4>
        <div className="flex items-center gap-2">
          <select
            className="px-2 py-1.5 rounded-md border text-sm"
            value={sortBy}
            onChange={(e) => dispatch(setSortBy(e.target.value as SortField))}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                Sort by {option.label}
              </option>
            ))}
          </select>
          <button
            className="p-1.5 hover:bg-gray-100 rounded-md"
            onClick={() =>
              dispatch(setOrder(orderBy === "ASC" ? "DESC" : "ASC"))
            }
          >
            {orderBy === "ASC" ? <SortAsc size={16} /> : <SortDesc size={16} />}
          </button>
        </div>
      </div>

      <hr className="my-4" />

      {/* Categories */}
      <div>
        <h4 className="text-sm text-reading-1 font-semibold mb-2">
          Categories
        </h4>
        <ul className="space-y-1 max-h-64 overflow-y-auto">
          {categories?.map(renderCategoryItem)}
        </ul>
      </div>
    </div>
  );
}
