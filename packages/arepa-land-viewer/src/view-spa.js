import singleSpaSvelte from "single-spa-svelte";
import View from "./View.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: View,
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
