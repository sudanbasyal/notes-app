import { useRef, useState } from "react";

import { LogOut } from "lucide-react";
import useUser from "../hooks/useUser";
import Button from "./ui/Button";

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useUser();

  return (
    <div className="relative">
      <Button
        text={user?.name?.charAt(0).toUpperCase()}
        type="button"
        variant="ghost"
        css="p-2 rounded-full w-8 h-8"
        onClick={() => setIsOpen(!isOpen)}
      />
      
      {isOpen && (
        <div className="absolute right-0 top-9 z-20 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
          <div className="px-3 py-1 border-b border-gray-100">
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-red-600"
          >
            <LogOut size={16} />
            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
