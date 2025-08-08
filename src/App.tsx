import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./App.css";
import Button from "./components/ui/Button";

import { PlusIcon, Search } from "lucide-react";
import TextField from "./components/ui/TextField";
import Modal from "./components/ui/Modal";

const validationSchema = Yup.object({
  search: Yup.string().required("Search is required"),
});
function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello world!
      </h1>
      <Button
        icon={<PlusIcon />}
        text="add"
        onClick={() => {}}
        css="min-w-[420px]"
      />
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Custom Input with Adornment</h2>

        <Formik
          initialValues={{ search: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <Button
              icon={<PlusIcon />}
              text="add"
              onClick={() => {}}
              css="min-w-[420px]"
            />
            <TextField
              name="search"
              placeholder="Search..."
              // variant="ghost"
              // endAdornment={<Search size={18} />}
              startAdornment={<Search size={18} />}
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg mt-3 hover:bg-blue-600"
            >
              Search
            </button>
          </Form>
        </Formik>

        <Button
          text="open"
          onClick={() => {
            setOpenModal(true);
          }}
        />
        <Modal
          isModalOpen={openModal}
          onClose={() => setOpenModal(false)}
          css="min-w-[500px]"
        >
          <h2 className="text-2xl font-bold mb-4 text-start">Modal Title</h2>
          <p className="mb-4">This is the modal content.</p>
          <Button text="Close" onClick={() => setOpenModal(false)} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
