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


import SettingsPage from "../Dashboard/SidebarPages/SettingsPage";

import SupportPage from "../Dashboard/SidebarPages/SupportPage";
import FaqPage from "../Dashboard/SidebarPages/FaqPage";
import UsersPage from "../Dashboard/SidebarPages/UsersPage";
import SubscriptionPage from "../Dashboard/SidebarPages/SubscriptionPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/verify',
    element: <VerifyOtp />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <MainContent />
      },
      // ✅ Sidebar linked routes
      {
        path: 'subscription',
        element: <SubscriptionPage></SubscriptionPage>
      },
      {
        path: 'users',
        element: <UsersPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />
      },
      {
        path: 'support',
        element: <SupportPage />
      },
      {
        path: 'faq',
        element: <FaqPage />
      }
    ]
  }
]);

export default router;
