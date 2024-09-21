import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  const isAddGoalPage = location.pathname === "/AddGoal";

  return (
    <main className={`flex flex-col min-h-screen`}>
      {!isAddGoalPage && <TopNavigation />}
      {children}
      {!isAddGoalPage && <BottomNavigation />}
    </main>
  );
}
