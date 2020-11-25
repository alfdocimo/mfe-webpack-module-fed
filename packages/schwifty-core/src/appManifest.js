export default [
  {
    name: "schwifty-shell-module",
    loadFn: () => import("schwiftyShellModule/Shell"),
    location: (location) => location.pathname.startsWith("/"),
  },
  {
    name: "schwifty-search-module",
    loadFn: () => import("schwiftySearchModule/SearchPanel"),
    location: (location) => location.pathname.startsWith("/"),
  },
  {
    name: "schwifty-viewer-module",
    loadFn: () => import("schwiftyViewerModule/View"),
    location: (location) => location.pathname.startsWith("/"),
  },
];
