import { NavigationProvider } from "features/navigation/provider";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <main className="min-h-screen">
      <NavigationProvider>
        <Outlet />
      </NavigationProvider>
    </main>
  );
}
