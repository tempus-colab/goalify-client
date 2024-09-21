import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <React.Suspense>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </React.Suspense>
  );
}

export default App;
