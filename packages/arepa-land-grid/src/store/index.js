import create from "zustand";

export const useCounter = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const useTodos = create((set) => ({
  todos: [],
  fetchTodos: async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    set({ todos: await resp.json() });
  },
}));
