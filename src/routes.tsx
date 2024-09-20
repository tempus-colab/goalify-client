import { AppLayout } from "layout/app.layout";
import { Groups } from "pages/groups";
import { SingleGroup } from "pages/groups/$id";
import { Home } from "pages/home";
import { Planner } from "pages/planner";
import { Stats } from "pages/stats";
import { createBrowserRouter } from "react-router-dom";
import AddGoal from "features/AddGoal";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "AddGoal",  
        element: <AddGoal />,
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
