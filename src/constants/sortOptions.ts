import { SortField } from "../interface/note";

 export const sortOptions: { label: string; value: SortField }[] = [
    { label: "Title", value: "title" },
    { label: "Created Date", value: "createdAt" },
    { label: "Updated Date", value: "updatedAt" },
  ];