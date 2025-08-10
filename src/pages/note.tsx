import Header from "../components/Header";
import NoteList from "../components/NoteList";
import Sidebar from "../components/Sidebar";
import UserDropdown from "../components/UserDropdown";

export default function NotesDashboard() {
  return (
    <section className="flex flex-col h-full rounded-lg border border-gray-200 ">
      <div className="flex flex-col  rounded-lg ">
        <div className="w-full flex justify-between border-b py-2 px-4">
          <h3 className="text-title1 font-semibold text-primary">EasyNotes</h3>
          <UserDropdown />
        </div>
        <Header />
        <div className="grid grid-cols-1 pt-2 pb-4 px-4 md:px-0 md:grid-cols-[230px_1fr] gap-8">
          <div className="hidden md:flex ">
            <Sidebar />
          </div>
          <NoteList />
        </div>
      </div>
    </section>
  );
}
