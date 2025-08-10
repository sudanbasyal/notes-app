import { JSONContent } from "@tiptap/react";
import { Category } from "./category";

export interface Note {
  id: number;
  title: string;
  content: JSONContent;
  categories: Category[];
}

export interface NoteFormValues {
  title: string;
  content: JSONContent;
  categoryIds: number[];
}

export type SortField = "title" | "createdAt" | "updatedAt";
export type SortOrder = "ASC" | "DESC";

export interface NoteSlice {
  search: string;
  sortBy: SortField | "";
  orderBy: SortOrder | "";
  categoryId: number | null;
}

export interface AllNoteResponse {
  data: Note[];
  meta: {
    total: number;
    page: number;
    lastPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
