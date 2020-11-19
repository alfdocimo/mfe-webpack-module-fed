import React from "react";
import Grid from "./Grid";
import { useCounter } from "./store";

function App() {
  const { count, inc } = useCounter();
  return (
    <h1>
      welcome to arepaland grid! {count}
      <button onClick={() => inc()}>click me</button>
      <Grid text="Arepas" />
    </h1>
  );
}

export default App;
