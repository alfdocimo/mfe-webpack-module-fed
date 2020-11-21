import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import { useTodos } from "./store";

export default function Grid({ text }) {
  const { fetchTodos } = useTodos();

  return (
    <div>
      I am a grid - {text}
      welcome to arepaland grid!
      <button onClick={() => fetchTodos()}>
        click me to fetch todos from the grid module
      </button>
    </div>
  );
}

const gridLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Grid,
});

export const bootstrap = gridLifeCycles.bootstrap;
export const mount = gridLifeCycles.mount;
export const unmount = gridLifeCycles.unmount;
