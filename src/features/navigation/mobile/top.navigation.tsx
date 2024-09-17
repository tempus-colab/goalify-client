import { Hamburger, Logo } from "icons";
import { Link } from "react-router-dom";

import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function MobileTopNavigation() {
  const [opened, { open, close }] = useDisclosure();

  return (
    <header>
      <nav className="flex lg:hidden items-center justify-between w-full bg-goal-gray-500 h-16 px-6">
        <Link to="/">
          <Logo />
        </Link>

        <button
          type="button"
          className="active:scale-95 transition-all "
          onClick={open}>
          <Hamburger />
        </button>
      </nav>

      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        position="right"
      />
    </header>
  );
}
