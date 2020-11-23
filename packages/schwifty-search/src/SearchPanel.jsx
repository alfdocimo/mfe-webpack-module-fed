import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import "./SearchPanel.scss";

// import { useTodos } from "./store";

export default function SearchPanel(props) {
  // const { fetchTodos } = useTodos();

  return <div className="SearchPanel">epa</div>;
}

const gridLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: SearchPanel,
});

export const bootstrap = gridLifeCycles.bootstrap;
export const mount = gridLifeCycles.mount;
export const unmount = gridLifeCycles.unmount;
