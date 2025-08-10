import { toast } from "sonner";
import {
  useDeleteNoteMutation,
  useGetAllNotesQuery,
} from "../features/note/noteService";
import { Note } from "../interface/note";
import { errorHandler } from "../lib/utils";
import NoteCard from "./ui/NoteCard";
import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import { useTypedSelector } from "../store";
import { useState } from "react";
import Pagination from "./ui/Pagination";

export default function NoteList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { search, sortBy, orderBy, categoryId } = useTypedSelector(
    (state) => state.note
  );
  const { data, isLoading } = useGetAllNotesQuery({
    page,
    ...(search && { search }),
    ...(sortBy && { sortBy }),
    ...(orderBy && { orderBy }),
    ...(categoryId && { categoryId }),
  });
  const [deleteNote] = useDeleteNoteMutation();
  const notes = data?.data;

  const handleDelete = async (id: number) => {
    try {
      await deleteNote(id).unwrap();
      toast.success("Note deleted successfully!");
    } catch (error) {
      errorHandler(error, "Failed to Delete Note");
    }
  };

  const handleEdit = (note: Note) => {
    dispatch(
      openModal({
        type: "edit-note",
        data: note,
      })
    );
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!notes) {
    return <div>No notes found</div>;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-150px)]">
      <div className="flex-1 overflow-y-auto">
        <div className="grid gap-3 pb-4 md:pr-4">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
      {data.meta.lastPage > 1 && (
        <Pagination
          currentPage={page}
          totalPages={data.meta.lastPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
