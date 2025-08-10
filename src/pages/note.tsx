import Header from "../components/Header";
import NoteList from "../components/NoteList";
import Sidebar from "../components/Sidebar";

export default function NotesDashboard() {
  return (
    <section className="flex flex-col gap-2 px-2">
      <Header />
      <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-[230px_1fr] gap-8">
        <Sidebar />
        <NoteList />
      </div>
    </section>
  );
}
