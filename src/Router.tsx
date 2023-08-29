import { createBrowserRouter } from "react-router-dom";
import { Home, Root, Survey } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "survey",
        element: <Survey />,
      },
    ],
  },
]);

export default router;
