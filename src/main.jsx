import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Pages/Layout.jsx";
import { Coffees } from "./Pages/Coffees.jsx";
import { Home } from "./Pages/Home.jsx";
import { Dashboard } from "./Pages/Dashboard.jsx";
import { Categories } from "./Component/Categories.jsx";
import { CoffeeCard } from "./Component/CoffeeCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/:categoryName",
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },

      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
