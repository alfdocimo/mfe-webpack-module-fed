export default [
  {
    name: "arepa-land-grid-module",
    loadFn: () => import("arepaLandGridModule/Grid"),
    location: (location) => location.pathname.startsWith("/"),
  },
  {
    name: "arepa-land-viewer-module",
    loadFn: () => import("arepaLandViewerModule/View"),
    location: (location) => location.pathname.startsWith("/"),
  },
];
