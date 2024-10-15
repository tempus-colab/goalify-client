/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_API: string;
  readonly NODE_ENV: "development" | "production" | "test" | "staging";
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_ROLLBAR_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "react-calender-horizontal*";
