import create from "zustand";
import { persist } from "zustand/middleware";

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

export const useTodos = create(
  log(
    persist(
      (set) => ({
        todos: [],
        fetchTodos: async () => {
          const resp = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
          );
          set({ todos: await resp.json() });
        },
      }),
      { name: "todos-storage" }
    )
  )
);
