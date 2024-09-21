import { Logo } from "icons";
import { Link, useNavigate} from "react-router-dom";



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

        <div
          onClick={handleAddGoal}
          className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black text-2xl  "
        >
          <span className="relative" style={{ top: '-2px' }}>+</span>
        </div>
      </nav>
    </header>
  );
}
