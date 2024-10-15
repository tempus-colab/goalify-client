import { ErrorBoundary, Provider } from "@rollbar/react";

const PROD_ENV = import.meta.env.NODE_ENV === "production";

const rollbarConfig = {
  accessToken: import.meta.env.VITE_ROLLBAR_ID,
  environment: import.meta.env.NODE_ENV,
  enabled: PROD_ENV,
  captureIp: true,
  addErrorContext: true,
};

export const RollbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider config={rollbarConfig}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </Provider>
  );
};
