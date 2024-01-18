import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./pages/Home";
import Gender from "./pages/Gender";
import Aromatic from "./pages/Aromatic";
import Wooded from "./pages/Wooded";
import Flowery from "./pages/Flowery";
import Fern from "./pages/Fern";
import Fruity from "./pages/Fruity";
import Oriental from "./pages/Oriental";
import Citrus from "./pages/Citrus";
import Result from "./pages/Result";
import Recommendation from "./pages/Recommendation";
import App from "./App";

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
        path: "/fern/:gender",
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
