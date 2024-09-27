import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import "./App.css";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider, QueryCache, MutationCache } from "@tanstack/react-query";



function App() {
  // Using QueryCache and MutationCache to globally handle errors
  const [client] = React.useState(
    new QueryClient({
      queryCache: new QueryCache({
        onError: (error: unknown) => {
          console.error("Global Query Error:", error);
        },
      }),
      mutationCache: new MutationCache({
        onError: (error: unknown) => {
          console.error("Global Mutation Error:", error);
        },
      }),
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <MantineProvider withCssVariables>
        <QueryClientProvider client={client}>
        <RouterProvider router={router} />
        </QueryClientProvider>
      </MantineProvider>
    </React.Suspense>
  );
}

export default App;
