import React from "react";
import DashboardRoutes from "routes/routes";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div>
      <RouterProvider router={DashboardRoutes} />
    </div>
  );
}

export default App;
