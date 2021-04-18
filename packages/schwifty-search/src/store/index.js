import create from "zustand";
import { persist } from "zustand/middleware";

import { gql } from "@apollo/client";

import client from "../apollo";

// Log every time state is changed
const log = (config) => (set, get, api) =>
  config(
    (args) => {
      set(args);
      console.log("%c New state 🔄", "background: #222; color: #bada55");
      console.log(get());
    },
    get,
    api
  );

export const useCharacters = create(
  log(
    persist(
      (set) => ({
        characters: [],
        loading: false,
        fetchCharacters: async (charName = "Morty", charStatus = "Alive", charGender = "Male") => {
          set((state) => ({ ...state, loading: true }));

          const resp = await client.query({
            query: gql`
              query getCharacters(
                $charName: String
                $charStatus: String
                $charGender: String
              ) {
                characters(
                  filter: {
                    name: $charName
                    status: $charStatus
                    gender: $charGender
                  }
                ) {
                  results {
                    id
                    name
                    image
                  }
                }
              }
            `,
            variables: {
              charName,
              charStatus,
              charGender,
            },
          });

          set((state) => ({ ...state, loading: false }));

          set((state) => ({
            ...state,
            characters: resp.data.characters.results,
          }));
        },
      }),
      { name: "characters-storage" }
    )
  )
);
