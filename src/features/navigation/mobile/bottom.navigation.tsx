import { HomeIcon } from "icons";
import { cn } from "lib/cn";
import type { JSX } from "react";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface NavigationItemProps extends NavLinkProps {
  icon: JSX.Element;
}

function NavigationItem({ icon, children, ...props }: NavigationItemProps) {
  return (
    <li className="flex-1 h-full w-full flex items-center justify-center">
      <NavLink
        {...props}
        className={({ isActive }) =>
          cn(
            "h-full w-full flex flex-col items-center justify-center uppercase text-xs font-bold gap-1 relative",
            isActive &&
              "before:absolute before:top-0 before:h-1 before:w-2/3 before:left-1/2 before:-translate-x-1/2 before:bg-goal-gray-900",
          )
        }>
        <>
          {icon}
          {children}
        </>
      </NavLink>
    </li>
  );
}

export function MobileBottomNavigation() {
  return (
    <footer className="fixed lg:hidden bottom-0 left-0 right-0">
      <nav>
        <ul className="bg-goal-gray-500 h-20 flex items-center justify-between gap-2">
          <NavigationItem to="/" icon={<HomeIcon />}>
            Home
          </NavigationItem>
          <NavigationItem to="/planner" icon={<HomeIcon />}>
            Planner
          </NavigationItem>
          <NavigationItem to="/groups" icon={<HomeIcon />}>
            Groups
          </NavigationItem>
          <NavigationItem to="/stats" icon={<HomeIcon />}>
            Stats
          </NavigationItem>
        </ul>
      </nav>
    </footer>
  );
}
