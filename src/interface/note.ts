import { JSONContent } from "@tiptap/react";
import { Category } from "./category";

export interface Note {
  id: string;
  title: string;
  content: JSONContent;
  categories: Category[]; 
}

export interface NoteFormValues {
  title:string;
  content:JSONContent;
  categoryIds:number[]
}