import React from "react";

const Grid = React.lazy(() => import("arepaLandGridModule/Grid"));

import { useCounter } from "arepaLandGridModule/store";
import { useTodos } from "arepaLandGridModule/store";

function App() {
  const { count, inc } = useCounter();
  const { todos, fetchTodos } = useTodos();
  console.log("App -> todos", todos);
  return (
    <h1>
      welcome to arepaland Core! {count}
      <React.Suspense fallback={null}>
        <Grid text="from core" />
      </React.Suspense>
      <button onClick={() => inc()}>click me</button>
      <button onClick={() => fetchTodos()}>Fetch Users</button>
      {todos && todos.map(({ title }) => <div key={title}>{title}</div>)}
    </h1>
  );
}

export default App;
