import { useState } from "react";
import { CheckIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Category, CategoryFormValues } from "../interface/category";
import { cn } from "../lib/utils";
import Button from "./ui/Button";
import TextField from "./ui/TextField";

interface CategoryListProps {
  categories: Category[];
  onUpdate: (values: Partial<CategoryFormValues>, id: number) => void;
  onDelete: (id: number) => void;
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
  color: Yup.string().required("Color is required"),
});

const CategoryLists = ({
  categories,
  onUpdate,
  onDelete,
}: CategoryListProps) => {
  const [editId, setEditId] = useState<number | null>(null);
  return (
    <section className="max-h-96 overflow-y-auto py-1 px-2 border-b border-gray-100">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex w-full justify-between gap-3 items-center px-3 py-2 rounded-lg text-left"
        >
          {editId === category.id ? (
            <Formik
              initialValues={{
                name: category.name,
                color: category.color,
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                onUpdate(values, category.id);
                setEditId(null);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex items-center gap-2 flex-1">
                  <TextField
                    name="name"
                    placeholder="Category name"
                    css="flex-1"
                  />
                  <Button
                    type="submit"
                    variant="ghost"
                    disabled={isSubmitting}
                    // onClick={() => handleSubmit()}
                    icon={<CheckIcon size="12px" color="green" />}
                  />
                  <Button
                    variant="ghost"
                    onClick={() => setEditId(null)}
                    icon={<Trash2Icon size="12px" color="red" />}
                  />
                </Form>
              )}
            </Formik>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span className={cn("w-2 h-2 rounded-full", category.color)} />
                <p className="text-body2">{category.name}</p>
              </div>
              <div className="flex gap-1">
                <Button
                  icon={<PencilIcon size="12px" />}
                  variant="ghost"
                  onClick={() => {
                    setEditId(category.id);
                  }}
                />
                <Button
                  icon={<Trash2Icon size="12px" />}
                  variant="ghost"
                  onClick={() => {
                    onDelete(category.id);
                  }}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default CategoryLists;
