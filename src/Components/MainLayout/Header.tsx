import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Storage from "service/Storage";
import { useNavigate } from "react-router-dom";
type Props = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setOpenDrawer }: Props) => {
  const navigate = useNavigate();
  const st = Storage();
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1300,
      }}
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            setOpenDrawer((old) => !old);
          }}
          sx={{
            color: "white",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component={"h1"}>
          {"Shopify"}
        </Typography>
        <Box display={"flex"} flexGrow={1} justifyContent="end">
          <IconButton>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </IconButton>
          <IconButton
            onClick={() => st.setAccessToken("dsfsdf")}
            sx={{
              color: "white",
              flexBasis: 25,
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              st.setLogout();
              navigate("/login");
            }}
            sx={{
              color: "white",
              flexBasis: 25,
            }}
          >
            <SettingsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
