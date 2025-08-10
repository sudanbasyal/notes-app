import { Category } from "./category";
import { JSONContent } from "@tiptap/react";

export interface Note {
  id: string;
  title: string;
  content: JSONContent;
  categories: Category[]; 
}
