import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import "./App.css";

import { RollbarProvider } from "core/rollbar";
import sentry from "core/sentry";
import { initializeDB } from "database";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import type { RxDatabase } from "rxdb";
import { Provider } from "rxdb-hooks";

import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// SENTRY ERROR MONITORING
sentry.init();

function App() {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {},
        mutations: {},
      },
    }),
  );

  const [db, setDb] = React.useState<RxDatabase>();

  React.useEffect(() => {
    initializeDB().then((db) => setDb(db));
  }, []);

  return (
    <React.Suspense>
      {/* ROLLBAR STACK TRACE REPORTER */}
      <RollbarProvider>
        {/* COMPONENT LIBRARY PROVIDER */}
        <MantineProvider withCssVariables>
          {/* OFFLINE APP RXDB PROVIDER */}
          <Provider db={db}>
            {/* REACT QUERY PROVIDER */}
            <QueryClientProvider client={client}>
              <RouterProvider router={router} />

              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </Provider>
        </MantineProvider>
      </RollbarProvider>
    </React.Suspense>
  );
}

export default App;
