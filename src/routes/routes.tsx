import React, { Suspense } from "react";
import Layout from "Components/MainLayout/Main";
import { createBrowserRouter } from "react-router-dom";
import AuthProvider from "Components/AuthProvider/AuthProvider";
const Table = React.lazy(() => import("Pages/Table/Table"));
const Dashboard = React.lazy(() => import("Pages/Dashboard/Dashboard"));
const Login = React.lazy(() => import("Pages/Login/Login"));

const DashboardRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AuthProvider>
              <Dashboard />
            </AuthProvider>
          </Suspense>
        ),
      },
      {
        path: "/table",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <AuthProvider>
              <Table />
            </AuthProvider>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        ),
      },
    ],
  },
]);

export default DashboardRoutes;
