import { Category, CategoryFormValues } from "../../interface/category";
import { api } from "../api";

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<{ categories: Category[] }, void>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    addCategory: builder.mutation<void, CategoryFormValues>({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["categories"],
    }),
    updateCategory: builder.mutation<
      void,
      { values: Partial<CategoryFormValues>; id: number }
    >({
      query: ({ values, id }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body: values,
      }),
      invalidatesTags: ["categories"],
    }),
    deleteCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["categories"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllCategoriesQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
