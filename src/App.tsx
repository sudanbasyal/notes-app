import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./App.css";
import Button from "./components/ui/Button";

import { PlusIcon, Search } from "lucide-react";
import TextField from "./components/ui/TextField";
import Modal from "./components/ui/Modal";
import { MultiSelect } from "./components/ui/MultiSelect";
import Tiptap from "./components/rich-text-editor/TiptTap";
import AppRoutes from "./routes/AppRoutes";
import { useSelector } from "react-redux";
import { RootState, useTypedSelector } from "./store";
import { Toaster } from "sonner";

// const validationSchema = Yup.object({
//   search: Yup.string().required("Search is required"),
// });
function App() {
  // const auth = useTypedSelector((state) => state.auth)
  // console.log(auth)
  //   const [openModal, setOpenModal] = useState(false);
  // const tagItems = [
  //   { id: 1, label: "Family", color: "bg-pink-500" },
  //   { id: 2, label: "Tasks", color: "bg-purple-500" },
  //   { id: 3, label: "Personal", color: "bg-green-500" },
  //   { id: 4, label: "Meetings", color: "bg-cyan-500" },
  //   { id: 5, label: "Shopping", color: "bg-teal-500" },
  //   { id: 6, label: "Planning", color: "bg-orange-500" },
  //   { id: 7, label: "Travel", color: "bg-blue-500" },
  // ];
  // const [selectedTags, setSelectedTags] = useState<typeof tagItems>([]);
  // const [post, setPost] = useState({
  //     type: 'doc',
  //     content: [

  //     ]
  //   });

  //   const onChange = (content: any) => {
  //     setPost(content);
  //     console.log('Editor JSON content:', content);
  //   };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen">
    //   <h1 className="text-3xl font-bold underline text-blue-500">
    //     Hello world!
    //   </h1>
    //   <Button
    //     icon={<PlusIcon />}
    //     text="add"
    //     onClick={() => {}}
    //     css="min-w-[420px]"
    //   />
    //   <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
    //     <h2 className="text-2xl font-bold mb-4">Custom Input with Adornment</h2>

    //     <Formik
    //       initialValues={{ search: "" }}
    //       validationSchema={validationSchema}
    //       onSubmit={(values) => console.log(values)}
    //     >
    //       <Form>
    //         <Button
    //           icon={<PlusIcon />}
    //           text="add"
    //           onClick={() => {}}
    //           css="min-w-[420px]"
    //         />
    //         <TextField
    //           name="search"
    //           placeholder="Search..."
    //           // variant="ghost"
    //           // endAdornment={<Search size={18} />}
    //           startAdornment={<Search size={18} />}
    //         />

    //         <button
    //           type="submit"
    //           className="w-full bg-blue-500 text-white py-2 rounded-lg mt-3 hover:bg-blue-600"
    //         >
    //           Search
    //         </button>
    //       </Form>
    //     </Formik>

    //     <Button
    //       text="open"
    //       onClick={() => {
    //         setOpenModal(true);
    //       }}
    //     />
    //     <Modal
    //       isModalOpen={openModal}
    //       onClose={() => setOpenModal(false)}
    //       css="min-w-[500px]"
    //     >
    //       <h2 className="text-2xl font-bold mb-4 text-start">Modal Title</h2>
    //       <p className="mb-4">This is the modal content.</p>
    //       {/* <Button text="Close" onClick={() => setOpenModal(false)} /> */}
    //     </Modal>
    //     <div className="p-6 space-y-4">
    //   <MultiSelect
    //     items={tagItems}
    //     placeholder="Search tags..."
    //     onChange={(items) => setSelectedTags(items)}
    //   />

    //   {/* Display selected tags as chips */}
    //   <div className="flex gap-2 flex-wrap">
    //     {selectedTags.map((tag) => (
    //       <span
    //         key={tag.id}
    //         className="flex items-center gap-1 px-2 py-0.5 bg-gray-200 rounded-full text-sm"
    //       >
    //         <span className={`w-2.5 h-2.5 rounded-full ${tag.color}`} />
    //         {tag.label}
    //       </span>
    //     ))}
    //   </div>
    // </div>
    //   </div>
    //   <Tiptap content={post} onChange={onChange}/>
    // </div>
    <main className="min-h-screen ">
      <AppRoutes />
      <Toaster richColors />
    </main>
  );
}

export default App;
