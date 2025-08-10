import { MenuIcon, XIcon } from "lucide-react";
import Button from "./ui/Button";
import { useState } from "react";

export default function Drawer() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <section className="block md:hidden">
      <Button
        type="button"
        onClick={() => setOpenDrawer(true)}
        variant="ghost"
        icon={<MenuIcon size="18px" />}
      />

      {/* Overlay */}
      {openDrawer && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 transition-opacity"
          onClick={() => setOpenDrawer(false)}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          openDrawer ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Menu</h2>
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpenDrawer(false)}
              icon={<XIcon size="12px" />}
            />
          </div>
          
          {/* Drawer Content */}
          <nav className="space-y-4">
            <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Home</a>
            <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Notes</a>
            <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Categories</a>
            <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Settings</a>
          </nav>
        </div>
      </div>
    </section>
  );
}