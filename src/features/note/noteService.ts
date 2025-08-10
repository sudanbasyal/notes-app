import { Note, NoteFormValues } from "../../interface/note";
import { api } from "../api";

const notesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotes: builder.query<Note[], void>({
      query: () => ({
        url: "/notes",
        method: "GET",
      }),
    }),
    addNote: builder.mutation<void, NoteFormValues>({
      query: (body) => ({
        url: "/notes",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllNotesQuery, useAddNoteMutation } = notesApi;
