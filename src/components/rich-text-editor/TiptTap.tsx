import { TextStyleKit } from "@tiptap/extension-text-style";
import { EditorContent, JSONContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
export const extensions = [TextStyleKit, StarterKit];
interface TiptapProps {
  content: JSONContent;
  onChange?: (content: JSONContent) => void;
}

const Tiptap = ({ content, onChange }: TiptapProps) => {
  const editor = useEditor({
    extensions: extensions,
    content: content,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm focus:outline-none min-h-[200px] w-full max-w-full py-1 px-3 text-left prose-headings:text-left prose-p:my-1 prose-headings:my-2",
      },
    },
    onUpdate: ({ editor }) => {
      if (onChange) {
        const jsonContent = editor.getJSON();
        onChange(jsonContent);
      }
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-lg bg-white w-full max-w-[450px]">
      <MenuBar editor={editor} />
      <div className="border-t ">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
