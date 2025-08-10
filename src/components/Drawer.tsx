import { MenuIcon, XIcon } from "lucide-react";
import Button from "./ui/Button";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { cn } from "../lib/utils";
import { useTypedSelector } from "../store";
import { useDispatch } from "react-redux";
import { openDrawer } from "../features/drawer/drawerSlice";

export default function Drawer() {
  const dispatch = useDispatch()
  const isOpen = useTypedSelector((state)=>state.drawer.isOpen)

  // Prevent scroll when drawer is open
  if (typeof window !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }

  return (
    <section className="block md:hidden">
      <Button
        type="button"
        onClick={() => dispatch(openDrawer(true))}
        variant="ghost"
        icon={<MenuIcon size="18px" />}
      />

      {/* Drawer Portal */}
      <div className={cn(
        "fixed inset-0 z-40 md:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}>
        {/* Overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/30",
            isOpen ? "opacity-100" : "opacity-0",
            "transition-opacity duration-300 ease-in-out"
          )}
          onClick={() => dispatch(openDrawer(false))}
          aria-hidden="true"
        />

        {/* Drawer Content */}
        <div className={cn(
          "fixed inset-y-0 left-0 w-72 bg-white transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="flex h-full flex-col overflow-hidden">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button
                type="button"
                variant="ghost"
                onClick={() => dispatch(openDrawer(false))}
                icon={<XIcon size="18px" />}
                aria-label="Close menu"
              />
            </div>
            
            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto p-4">
              <Sidebar/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
