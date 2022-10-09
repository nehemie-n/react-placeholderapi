import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import App from "./views/App";
import Photos from "./views/photos/Photos";
import Posts from "./views/posts/Posts";
import TodoList from "./views/todo/TodoList";

const router = createBrowserRouter([
  {
    path: '',
    element: <App></App>,
    children: [
      {
        path: "/photos",
        element: <Photos />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/todo",
        element: <TodoList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
