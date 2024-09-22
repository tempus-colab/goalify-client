import type { ReactNode } from "react";

import { MobileBottomNavigation } from "../mobile/bottom.navigation";
import { MobileTopNavigation } from "../mobile/top.navigation";

function BottomNavigation() {
  return (
    <>
      <MobileBottomNavigation />
    </>
  );
}

function TopNavigation() {
  return (
    <>
      <MobileTopNavigation />
    </>
  );
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <TopNavigation />
      {children}
      <BottomNavigation />
    </main>
  );
}
