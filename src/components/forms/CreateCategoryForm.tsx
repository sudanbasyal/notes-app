import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { SignupValues } from "../../interface/auth";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { CategoryFormValues } from "../../interface/category";
import { PlusIcon } from "lucide-react";
import { colors } from "../../constants/color";
import { cn } from "../../lib/utils";

const categorySchema = Yup.object({
  name: Yup.string().required("Name is required"),
});

type CreateCategoryFormProps = {
  onSubmit: (
    values: CategoryFormValues,
    formikHelpers: FormikHelpers<CategoryFormValues>
  ) => void;
};

const initialValues = {
  name: "",
  color: "bg-red-500",
};

const CreateCategoryForm = ({ onSubmit }: CreateCategoryFormProps) => {
  return (
    <Formik<CategoryFormValues>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={categorySchema}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className="flex flex-col gap-2 w-full">
          <div className="flex gap-2 items-end w-full">
            <TextField
              label="Name"
              variant="bordered"
              name="name"
              type="text"
              css="text-left flex-1"
            />
            <Button
              type="submit"
              icon={<PlusIcon size="12px" />}
              disabled={isSubmitting}
              css="h-10"
            />
          </div>
          <label className="block text-sm font-medium text-reading-1">
            Select color
          </label>
          <div className="flex gap-1 w-">
            {colors.map((color) => (
              <label key={color.label} className="relative">
                <input
                  type="radio"
                  name="color"
                  value={color.value}
                  className="sr-only"
                  checked={values.color === color.value}
                  onChange={() => setFieldValue("color", color.value)}
                />
                <span
                  className={cn(
                    "block w-4 h-4 rounded-full cursor-pointer",
                    color.value,
                    {
                      "ring-1 ring-offset-2 ring-primary/20":
                        values.color === color.value,
                    }
                  )}
                  aria-hidden="true"
                />
              </label>
            ))}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateCategoryForm;
