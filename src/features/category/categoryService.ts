import { AuthResponse, LoginValues, SignupValues } from "../../interface/auth";
import { Category } from "../../interface/category";
import { api } from "../api";

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCategories: builder.query<{ categories: Category[] }, void>({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false, // optional
});

export const { useGetAllCategoriesQuery } = categoryApi;
