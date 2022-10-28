import React, { Children, Suspense } from "react";
import Layout from "Components/MainLayout/Main";
import { createBrowserRouter } from "react-router-dom";
const Table = React.lazy(() => import("Pages/Table/Table"));
const Dashboard = React.lazy(() => import("Pages/Dashboard/Dashboard"));
const Login = React.lazy(() => import("Pages/Loign/Login"));

const DashboardRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/table",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Table />
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
