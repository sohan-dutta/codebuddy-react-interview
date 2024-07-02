import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Posts from "./pages/Posts";
import PostsNew from "./pages/PostsNew";
import Root from "./pages/Root";
import MulitStepperForm from "./pages/MultiStepper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/posts", element: <Posts /> },
      { path: "/posts", element: <PostsNew /> },
      { path: "/stepperForm", element: <MulitStepperForm /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
