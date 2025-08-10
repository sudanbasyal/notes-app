import { Note } from "../interface/note";
import NoteCard from "./ui/NoteCard";

const notes: Note[] = [
  {
    id: "1",
    title: "Project Milestones",
    content: {
      type: "doc",
      content: [
        {
          type: "paragraph",
          content: [
            { type: "text", text: "This is a sample note content with " },
            { type: "text", marks: [{ type: "bold" }], text: "bold" },
            { type: "text", text: " and " },
            { type: "text", marks: [{ type: "italic" }], text: "italic" },
            { type: "text", text: " text for preview." },
          ],
        },
        {
          type: "paragraph",
          content: [{ type: "text", text: "It can have multiple paragraphs." }],
        },
      ],
    },
    categories: [
      {
        id: 1,
        name: "Work",
        color: "#f9c74f",
      },
    ],
  },
  {
    id: "1",
    title: "Project Milestones",
    content: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 1 },
          content: [{ type: "text", text: "Project Milestones" }],
        },
        {
          type: "heading",
          attrs: { level: 2 },
          content: [{ type: "text", text: "Q1 Goals:" }],
        },
        {
          type: "bulletList",
          content: [
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Launch beta version" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Gather user feedback" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Implement core features" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Performance optimization" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Security audit" }],
                },
              ],
            },
            {
              type: "listItem",
              content: [
                {
                  type: "paragraph",
                  content: [{ type: "text", text: "Documentation update" }],
                },
              ],
            },
          ],
        },
      ],
    },
    categories: [
      {
        id: 1,
        name: "Work",
        color: "#f9c74f",
      },
    ],
  },
  // more notes...
];

export default function NoteList() {
  const handleEdit = (id: string) => {
    console.log("Edit note:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete note:", id);
  };

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
