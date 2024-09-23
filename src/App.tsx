import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import "./App.css";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";

import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {},
        mutations: {},
      },
    }),
  );

  return (
    <React.Suspense>
      <MantineProvider withCssVariables>
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
    </React.Suspense>
  );
}

export default App;
