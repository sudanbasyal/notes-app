import { FormikHelpers } from "formik";
import { toast } from "sonner";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
  useUpdateCategoryMutation,
} from "../../features/category/categoryService";
import { CategoryFormValues } from "../../interface/category";
import { errorHandler } from "../../lib/utils";
import CategoryLists from "../CategoryList";
import CreateCategoryForm from "./CreateCategoryForm";

const CategoryForm = () => {
  const { data } = useGetAllCategoriesQuery();
  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleAddCategory = async (
    values: CategoryFormValues,
    { setSubmitting, resetForm }: FormikHelpers<CategoryFormValues>
  ) => {
    try {
      await addCategory(values).unwrap();
      toast.success("Category added successfully");
      resetForm();
    } catch (error) {
      errorHandler(error, "Failed to create category");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteCategory(id).unwrap();
      toast.success("Category deleted successfully");
    } catch (error) {
      errorHandler(error, "Failed to delete category");
    }
  };

  const handleUpdateCategory = async (
    values: Partial<CategoryFormValues>,
    id: number
  ) => {
    try {
      await updateCategory({ values, id }).unwrap();
      toast.success("Category updated successfully");
    } catch (error) {
      errorHandler(error, "Failed to update category");
    }
  };

  return (
    <div className="flex flex-col gap-4 min-h-[400px] w-full">
      <h1 className="text-heading2 capitalize">edit categories</h1>
      <div className="flex-1 justify-center overflow-y-auto max-h-[60vh]">
        {data?.categories && data?.categories?.length > 0 ? (
          <CategoryLists
            categories={data?.categories || []}
            onUpdate={handleUpdateCategory}
            onDelete={handleDeleteCategory}
          />
        ) : (
          <div className="flex flex-col items-center justify-center min-h-64">
            <h3 className="text-lg text-gray-600">No Categories Found</h3>
            <p className="text-sm text-gray-500">
              Create a new category to organize your notes.
            </p>
          </div>
        )}
      </div>
      <div className="border-t pt-4 w-full">
        <CreateCategoryForm onSubmit={handleAddCategory} />
      </div>
    </div>
  );
};

export default CategoryForm;
