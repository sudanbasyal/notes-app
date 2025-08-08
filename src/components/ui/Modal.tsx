import { XIcon } from "lucide-react";
import React from "react";
import { cn } from "../../lib/utils";

type Props = {
  isModalOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  css?: string;
};

const Modal = ({ isModalOpen, onClose, children, css }: Props) => {
  if (!isModalOpen) return null;
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <article className="relative">
        <main
          id="modal-content"
          className={cn(
            "p-3 pt-4 border border-white max-w-[500px] bg-white rounded-2xl relative",
            css
          )}
        >
          {children}
          <div
            id="exit-icon"
            className="cursor-pointer absolute top-4 right-4 hover:bg-primary/5 rounded"
          >
            <XIcon onClick={onClose} size="16px" />
          </div>
        </main>
      </article>
    </section>
  );
};

export default Modal;
