import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";
type Props = {};

const Main = (props: Props) => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);

  return (
    <Box display={"flex"}>
      <Header setOpenDrawer={setOpenDrawer} />
      <Sidebar isOpenDrawer={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "65px",
          padding: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
