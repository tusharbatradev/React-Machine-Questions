import React from "react";
import Products from "./Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Cart";
import Body from "./Body";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
