import React from "react";
import { useGetAllCategoriesQuery } from "../../features/category/categoryService";
import { Note, NoteFormValues } from "../../interface/note";
import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../ui/TextField";
import { MultiSelect } from "../ui/MultiSelect";
import Tiptap from "../rich-text-editor/TiptTap";
import Button from "../ui/Button";
import {
  useAddNoteMutation,
  useUpdateNoteMutation,
} from "../../features/note/noteService";
import { useTypedSelector } from "../../store";
import { toast } from "sonner";
import { errorHandler } from "../../lib/utils";
import * as Yup from "yup";
type Props = {
  data?: Note;
  onClose: () => void;
};

const title = {
  "edit-note": "Edit Note",
  "add-note": "Create Note",
};

const NoteSchema = Yup.object().shape({
  title: Yup.string()
    .trim()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters"),
  content: Yup.object()
    .test("is-not-empty", "Content is required", (value) => {
      return value && Object.keys(value).length > 0;
    })
    .required("Content is required"),
  categoryIds: Yup.array()
    .min(1, "Please select at least one category")
    .required("Categories are required"),
});

const NoteForm = ({ data, onClose }: Props) => {
  const { data: categoriesData } = useGetAllCategoriesQuery();
  const [addNote] = useAddNoteMutation();
  const [updateNote] = useUpdateNoteMutation();
  const { type } = useTypedSelector((state) => state.modal);

  const initialValues = {
    title: data?.title || "",
    content: data?.content || {},
    categoryIds: data?.categories?.map((cat) => cat.id) || [],
  };

  const getCategoryById = (id: number) => {
    return categoriesData?.categories.find((cat) => cat.id === id);
  };

  const handleNoteSubmit = async (
    values: NoteFormValues,
    { setSubmitting }: FormikHelpers<NoteFormValues>
  ) => {
    try {
      if (data) {
        await updateNote({ id: data.id, values }).unwrap();
        toast.success("Note updated successfully!");
      } else {
        await addNote(values).unwrap();
        toast.success("Note added successfully!");
      }
      onClose();
    } catch (error) {
      errorHandler(error, "Failed to save note");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 min-h-[450px] w-full">
      <h1 className="text-heading2 capitalize">
        {title[type as keyof typeof title]}
      </h1>
      <Formik<NoteFormValues>
        initialValues={initialValues}
        validationSchema={NoteSchema}
        onSubmit={handleNoteSubmit}
      >
        {({ values, setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-4 p-1">
              <TextField name="title" placeholder="Title" />

              <div className="w-full">
                <Tiptap
                  content={values.content}
                  onChange={(newContent) => setFieldValue("content", newContent)}
                />
                {touched.content && typeof errors.content === 'string' && (
                  <p className="text-sm text-red-500 mt-1">{errors.content}</p>
                )}
              </div>

              <div className="space-y-2">
                <MultiSelect
                  placeholder="Add tag"
                  value={values.categoryIds}
                  items={categoriesData?.categories || []}
                  onChange={(selected) =>
                    setFieldValue(
                      "categoryIds",
                      selected.map((cat) => cat.id)
                    )
                  }
                />

                <div className="flex gap-2 flex-wrap">
                  {values.categoryIds.map((id) => {
                    const category = getCategoryById(id);
                    if (!category) return null;

                    return (
                      <span
                        key={id}
                        className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md text-sm"
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${category.color}`}
                        />
                        {category.name}
                      </span>
                    );
                  })}
                </div>
                {touched.categoryIds && errors.categoryIds && (
                  <p className="text-sm text-red-500">{errors.categoryIds}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="ghost"
                text="Cancel"
                onClick={onClose}
              />
              <Button
                type="submit"
                text={data ? "Save Changes" : "Create Note"}
                disabled={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NoteForm;
