
import { Pencil, Tag } from "lucide-react";
import { Category } from "../interface/category";
import { MenuItem } from "../interface/sidebar";

export const topMenu: MenuItem[] = [
  { title: "Notes", icon: Pencil, path: "/notes" },
  { title: "Edit Categories", icon: Tag },
];

export const labels: Category[] = [
  { id: 1, name: "Family", color: "bg-pink-500" },
  { id: 2, name: "Tasks", color: "bg-purple-500" },
  { id: 3, name: "Personal", color: "bg-green-500" },
  { id: 4, name: "Meetings", color: "bg-sky-500" },
  { id: 5, name: "Shopping", color: "bg-cyan-500" },
  { id: 6, name: "Planning", color: "bg-orange-500" },
  { id: 7, name: "Travel", color: "bg-blue-500" },
];
