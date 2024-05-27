import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";
import Umdog from "./routes/Umdog.jsx";
import Dogs from "./routes/Dogs.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/TheDogHouse",
        element: <Home />,
      },
      {
        path: "/Dogs",
        element: <Dogs />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/:name",
        element: <Umdog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
