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
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-auto">
      <article className="relative w-full max-w-[512px]">
        <main
          id="modal-content"
          className={cn(
            "p-3 pt-4 border border-white bg-white rounded-2xl relative w-full",
            css
          )}
        >
          {children}
          <button
            id="exit-icon"
            className="cursor-pointer absolute top-4 right-4 hover:bg-primary/5 rounded p-1"
            onClick={onClose}
          >
            <XIcon size="16px" />
          </button>
        </main>
      </article>
    </section>
  );
};

export default Modal;
