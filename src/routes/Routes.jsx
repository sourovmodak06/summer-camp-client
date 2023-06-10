import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Instructors from "../pages/instructors/Instructors";
import Classes from "../pages/classes/Classes";
import Dashboard from "../layout/Dashboard";
import StudentClasses from "../pages/dashboard/studentClasses/StudentClasses";
import StudentHome from "../pages/dashboard/studentHome/studentHome";
import PrivateRoute from "./PrivateRoute";
import Payments from "../pages/dashboard/payments/Payments";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "studentHome",
          element: <PrivateRoute><StudentHome></StudentHome></PrivateRoute>
        },
        {
          path: "studentClasses",
          element: <PrivateRoute><StudentClasses></StudentClasses></PrivateRoute>
        },
        {
          path: "payments",
          element: <PrivateRoute><Payments></Payments></PrivateRoute>
        }
      ]
    }
  ]);

export default router;