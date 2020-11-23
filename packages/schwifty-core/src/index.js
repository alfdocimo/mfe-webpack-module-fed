import { registerApplication, start } from "single-spa";
import appManifest from "./appManifest";

appManifest.forEach(({ name, loadFn, location }) =>
  registerApplication(name, loadFn, location)
);

start();
