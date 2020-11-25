# MFE + WP5 + single SPA demo

Live demo 👉 https://schwifty-mfe.netlify.app/

Each package is deployed as an individual module on a CDN a then consumed on the core app

- https://schwifty-search.surge.sh/dist/index.html
- https://schwifty-viewer.surge.sh/dist/index.html
- https://schwifty-shell.surge.sh/dist/index.html

## Packages

### Search Module

This module exposes utilities to use the store from `zustand` along with hooks to get characters, fetch new ones and subscribe to the store. It also exposes the `SearchPanel` which is used to filter the characters. Created in `React` and Zustand

Exposes:
- SearchPanel (component)
- zustand store (characters, loading, fetchCharacters)

### Viewer Module

This module consumes the store registered on the `search module` and when there are new characters it displays them in cards components. Created in `Svelte`.

Exposes:
- Viewer (component)

Consumes: 
- SearchModule's `store`

### Shell Module

This module facilitates a component to allocate the other modules. Created in `Vue`.

Consumes:
- NA

Exposes:
- Shell (component)


### Core Module

Makes use of the `single-spa` API to register the parcels into place.

Consumes:
- ShellModule/Shell
- SearchModule/SearchPanel
- ViewerModule/View

💡 NOTE: Please keep in mind that this was made for purely educational purposes and it DOES NOT demonstrate usage of best practices for spa's
