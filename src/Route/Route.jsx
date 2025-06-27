import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import MainLayout from "../components/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import MainContent from "../Dashboard/MainContent";
import Login from "../pages/Login_Register/Login";
import Register from "../pages/Login_Register/Register";
import VerifyOtp from "../pages/Login_Register/VerifyOtp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     }
    ]
  },
  {
    path:'login',
    element:<Login></Login>
  },
  {
    path:'register',
    element:<Register></Register>
  },
  {
    path:'verify',
    element:<VerifyOtp></VerifyOtp>
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
     children: [
      {
        index: true,
        element: <MainContent />
      },
      // Add other nested routes if needed
    ]
  }
]);

export default router;