import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Box from "@mui/material/Box";

type Props = {};

const Main = (props: Props) => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
