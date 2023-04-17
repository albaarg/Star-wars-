import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const queryApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://swapi.dev/api",
  }),
  endpoints: (builder) => ({
    getId: builder.query({
      query: (page = 1) => `people/?page=${page}`,
      transformResponse: (response) => {
        const people = response.results.map((person) => {
          const homeworldId = person.homeworld.split("/").filter(Boolean).pop();
          return { ...person, homeworldId };
        });
        return { ...response, results: people };
      },
    }),
  }),
});

export const { useGetIdQuery } = queryApi;
