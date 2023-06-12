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

import InstructorHome from "../pages/dashboard/instructorHome/InstructorHome";
import AddClass from "../pages/dashboard/addClass/AddClass";
import MyClass from "../pages/dashboard/myClass/MyClass";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import SecureRoutes from "./SecureRoutes";
import HomeDashboard from "../components/homeDashboard/HomeDashboard";
import Pay from "../pages/dashboard/pay/Pay";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import ManageClassItem from "../pages/dashboard/manageClassItem/ManageClassItem";
import UpdateClassItem from "../pages/dashboard/updateClassItem/UpdateClassItem";

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
          path: "pay",
          element: <PrivateRoute><Pay></Pay></PrivateRoute>,
        },
        {
          path: 'homeDashboard',
          element: <HomeDashboard></HomeDashboard>
        },
        {
          path: "studentHome",
          element: <PrivateRoute><StudentHome></StudentHome></PrivateRoute>
        },
        {
          path: "studentClasses",
          element: <PrivateRoute><StudentClasses></StudentClasses></PrivateRoute>
        },
        {
          path: "instructorHome",
          element: <InstructorHome></InstructorHome>
        },
        {
          path: "adminHome",
          element: <AdminHome></AdminHome>
        },
        {
          path: "manageClassItem",
          element: <ManageClassItem></ManageClassItem>
        },
        {
          path: "updateClassItem/:id",
          element: <UpdateClassItem></UpdateClassItem>,
          loader: ({params}) => fetch(`https://school-of-rock-server.vercel.app/classes/${params.id}`)
        },
        {
          path: "addClass",
          element: <AddClass></AddClass>
        },
        {
          path: "myClass",
          element: <MyClass></MyClass>
        },
        {
          path: "allUsers",
          element: <SecureRoutes><AllUsers></AllUsers></SecureRoutes>
        }
      ]
    }
  ]);

export default router;