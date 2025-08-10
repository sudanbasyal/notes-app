import { Pencil, Trash2 } from "lucide-react";
import { Note } from "../../interface/note";
import renderContentAsHTML from "../rich-text-editor/TiptapContentToHTML";

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
}

const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  const htmlContent = renderContentAsHTML(note.content);
  return (
    <div className="border border-gray-100 rounded-lg p-4 bg-white shadow-sm flex flex-col gap-2 max-h-80 ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{note.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="p-1 rounded hover:bg-gray-100 text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div
        className="prose prose-sm max-w-none text-gray-600 line-clamp-7 overflow-hidden"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {note.categories && note.categories.length > 0 && (
        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          {note.categories.map((category) => (
            <span
              key={category.id}
              className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md text-sm"
            >
              <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
              {category.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteCard;
