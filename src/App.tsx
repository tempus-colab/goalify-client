import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import "./App.css";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";

import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <React.Suspense>
      <MantineProvider withCssVariables>
        <RouterProvider router={router} />
      </MantineProvider>
    </React.Suspense>
  );
}

export default App;
