import { JSONContent } from "@tiptap/react";
import { generateHTML } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import { extensions } from "./TiptTap";

function renderContentAsHTML(content: JSONContent): string {
  return generateHTML(content, extensions);
}


export default renderContentAsHTML;
