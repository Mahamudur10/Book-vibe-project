import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/Books",
        element: <Books></Books>,
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
]);