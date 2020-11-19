import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

export default function Grid({ text }) {
  return <div>I am a grid - {text}</div>;
}

const gridLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Grid,
});

export const bootstrap = gridLifeCycles.bootstrap;
export const mount = gridLifeCycles.mount;
export const unmount = gridLifeCycles.unmount;
