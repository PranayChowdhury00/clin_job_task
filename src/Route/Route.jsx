import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../components/Home";
import MainLayout from "../components/MainLayout";
import Dashboard from "../Dashboard/Dashboard";
import MainContent from "../Dashboard/MainContent";

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