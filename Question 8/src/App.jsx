import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
