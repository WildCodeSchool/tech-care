import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import Home from "./pages/Home";
import Gender from "./pages/Gender";
import Fern from "./pages/Fern";
import Flowery from "./pages/Flowery";
import Fruity from "./pages/Fruity";
import Oriental from "./pages/Oriental";
import Aromatic from "./pages/Aromatic";
import Citrus from "./pages/Citrus";
import Wooded from "./pages/Wooded";
import Result from "./pages/Result";
import Recommendation from "./pages/Recommendation";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gender",
        element: <Gender />,
      },
      {
        path: "/fern",
        element: <Fern />,
      },
      {
        path: "/flowery",
        element: <Flowery />,
      },
      {
        path: "/fruity",
        element: <Fruity />,
      },
      {
        path: "/oriental",
        element: <Oriental />,
      },
      {
        path: "/aromatic",
        element: <Aromatic />,
      },
      {
        path: "/citrus",
        element: <Citrus />,
      },
      {
        path: "/wooded",
        element: <Wooded />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/recommendation",
        element: <Recommendation />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
