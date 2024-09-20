import { Logo } from "icons";
import { Link, useNavigate} from "react-router-dom";
import { Button } from "@mantine/core";


export function MobileTopNavigation() {
  const navigate = useNavigate();

  const handleAddGoal = () => {
    navigate("/AddGoal");
  };

  return (
    <header>
      <nav className="flex lg:hidden items-center justify-between w-full bg-goal-gray-500 h-16 px-6">
        <Link to="/">
          <Logo />
        </Link>

        <Button
          onClick={handleAddGoal}
          color="teal"
          variant="outline "
          className="font-size: 2 rem  font-bold rounded-full"
        >
          +
        </Button>
      </nav>
    </header>
  );
}
