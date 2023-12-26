import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Root from "./pages/Root";
import MovieSeats from "./pages/MovieSeats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/posts", element: <Posts /> },
      { path: "/movie-seats", element: <MovieSeats /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
