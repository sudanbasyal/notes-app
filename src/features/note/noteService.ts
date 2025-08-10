import { Note, NoteFormValues } from "../../interface/note";
import { api } from "../api";

const notesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotes: builder.query<{ data: Note[] }, void>({
      query: () => ({
        url: "/notes",
        method: "GET",
      }),
      providesTags: ["notes"],
    }),
    addNote: builder.mutation<void, NoteFormValues>({
      query: (body) => ({
        url: "/notes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["notes"],
    }),
    updateNote: builder.mutation<void, { id: number; values: NoteFormValues }>({
      query: ({ id, values }) => ({
        url: `/notes/${id}`,
        method: "PATCH",
        body: values,
      }),
      invalidatesTags: ["notes"],
    }),
    deleteNote: builder.mutation<void, number>({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notes"],
    }),
  }),
});

export const {
  useGetAllNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApi;
