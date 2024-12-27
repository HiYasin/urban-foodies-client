import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import App from "../App";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import ProtectedRouter from "./ProtectedRouter";
import AddFood from "../pages/AddFood";
import MyOrders from "../pages/MyOrders";
import MyFoods from "../pages/MyFoods";
import SingleFood from "../pages/SingleFood";
import Purchase from "../pages/Purchase";
import UpdateFood from "../pages/UpdateFood";


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
        path: "/all-foods",
        element:<AllFoods></AllFoods>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/add-food",
        element: <ProtectedRouter><AddFood></AddFood></ProtectedRouter>
      },
      {
        path: "/my-foods",
        element: <ProtectedRouter><MyFoods></MyFoods></ProtectedRouter>
      },
      {
        path: "/my-orders",
        element: <ProtectedRouter><MyOrders></MyOrders></ProtectedRouter>
      },
      {
        path: "/foods/:id",
        element: <ProtectedRouter><SingleFood></SingleFood></ProtectedRouter>,
        loader: ({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <ProtectedRouter><UpdateFood></UpdateFood></ProtectedRouter>,
        loader: ({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/purchase/:id",
        element: <ProtectedRouter><Purchase></Purchase></ProtectedRouter>,
        loader: ({params})=>fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/app",
        element: <ProtectedRouter><App></App></ProtectedRouter>
      },
    ]
  },

]);
export default Router;  