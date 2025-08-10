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

export default function NoteList() {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllNotesQuery();
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

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!notes) {
    return <div>No notes found</div>;
  }

  return (
    <div className="grid gap-3">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
