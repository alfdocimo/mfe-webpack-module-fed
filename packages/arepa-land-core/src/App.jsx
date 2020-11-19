import React from "react";

const Grid = React.lazy(() => import("arepaLandGridModule/Grid"));

function App() {
  return (
    <h1>
      welcome to arepaland Core!
      <React.Suspense fallback={null}>
        <Grid text="from core" />
      </React.Suspense>
    </h1>
  );
}

export default App;
