import { useLocation } from "react-router-dom";
import { labels, topMenu } from "../constants/menu-data";
import { useGetAllCategoriesQuery } from "../features/category/categoryService";
import { Category } from "../interface/category";
import { MenuItem } from "../interface/sidebar";
import { cn } from "../lib/utils";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { data, isLoading } = useGetAllCategoriesQuery();
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
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 w-full text-left"
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
    <div className="hidden md:flex w-full bg-white border border-gray-100 rounded-lg mx-4 p-3 h-auto flex-col gap-4">
      {/* Top Menu */}
      <div className="space-y-2">{topMenu.map(renderMenuItem)}</div>

      {/* Divider */}
      <hr className="my-2" />

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
