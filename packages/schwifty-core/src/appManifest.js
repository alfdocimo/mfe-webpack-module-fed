export default [
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
