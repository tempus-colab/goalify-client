import { SplashScreen } from "features/splash-screen";
import { AppLayout } from "layout/app.layout";
// import { NewGoal } from "pages/goals/new";
import { Groups } from "pages/groups";
import { SingleGroup } from "pages/groups/$id";
import { Home } from "pages/home";
import { Planner } from "pages/planner";
import { Stats } from "pages/stats";
import { createBrowserRouter } from "react-router-dom";
import GoalForm from "pages/goals/new/index";
import EditGoal from "pages/goals/edit/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <SplashScreen />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "preload",
        element: <SplashScreen />,
      },
      {
        path: "GoalForm",
        element: <GoalForm />,
      },
      {
        path: "EditGoal",
        element: <EditGoal />,
      },
      {
        path: "planner",
        element: <Planner />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "groups",
        children: [
          { index: true, element: <Groups /> },
          { path: ":id", element: <SingleGroup /> },
        ],
      },
    ],
  },
]);
