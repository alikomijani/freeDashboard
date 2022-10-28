import React, { Suspense } from "react";
import Layout from "Components/MainLayout/Main";
import { createBrowserRouter } from "react-router-dom";
const Table = React.lazy(() => import("Pages/Table/Table"));
const Dashboard = React.lazy(() => import("Pages/Dashboard/Dashboard"));

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
]);

export default DashboardRoutes;
