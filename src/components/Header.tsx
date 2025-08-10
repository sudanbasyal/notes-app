import { NotebookPen } from "lucide-react";
import Drawer from "./Drawer";
import Button from "./ui/Button";
import SearchBar from "./ui/SearchBar";
import TextField from "./ui/TextField";

export default function Header() {
  const handleSearch = async (query: string) => {
    console.log(query);
  };
  return (
    <section className="grid grid-cols-[44px_1fr_44px] md:grid-cols-[230px_1fr] gap-4 p-4">
      <Drawer />
      <div className="order-2 flex-1 max-w-56">
        <SearchBar onSearch={handleSearch} placeholder="Search notes..." />
      </div>
      <Button
        text="Add Note"
        icon={<NotebookPen size="12px" />}
        variant="primary"
        onClick={() => {}}
        css="order-3 md:order-1"
      />
    </section>
  );
}
