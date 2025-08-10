import { generateHTML } from "@tiptap/core";
import { JSONContent } from "@tiptap/react";
import { extensions } from "./TiptTap";

function renderContentAsHTML(content: JSONContent): string {
  return generateHTML(content, extensions);
}

export default renderContentAsHTML;
