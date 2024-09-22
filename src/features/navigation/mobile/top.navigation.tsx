import { Link, useNavigate } from "react-router-dom";

import { Image } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export function MobileTopNavigation() {
  const navigate = useNavigate();

  const handleAddGoal = () => {
    navigate("/goals/new");
  };

  return (
    <header className="sticky top-0 z-[5]">
      <nav className="flex lg:hidden items-center justify-between w-full bg-goal-gray-950 h-16 px-6">
        <Link to="/">
          <Image src="/goalify.png" alt="Logo" />
        </Link>

        <button
          type="button"
          onClick={handleAddGoal}
          className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black text-2xl">
          <IconPlus />
        </button>
      </nav>
    </header>
  );
}
