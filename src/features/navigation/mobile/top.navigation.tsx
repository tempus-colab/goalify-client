import { Link, useNavigate } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import { Image } from "@mantine/core";

export function MobileTopNavigation() {
  const navigate = useNavigate();

  const handleGoalForm = () => {
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
          onClick={handleGoalForm}
          className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black text-2xl">
          <span className="relative" style={{ top: "1px" }}>
            <IconPlus size={20} />
          </span>
        </button>
      </nav>
    </header>
  );
}
