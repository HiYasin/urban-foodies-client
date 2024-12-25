import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import App from "../App";


const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFound></PageNotFound>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home> // Placeholder for home page content, replace with your own component here.
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/app",
        element: <App></App>
      },
    ]
  },

]);
export default Router;  