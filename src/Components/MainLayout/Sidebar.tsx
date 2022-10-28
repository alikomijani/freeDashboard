import React from "react";
import Drawer from "@mui/material/Drawer";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import Box from "@mui/material/Box";
import SideBarListItem from "Components/SidevbarListItem/SideBarListItem";
import sidebarItems from "./sidebarItems";
type Props = {
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenDrawer: boolean;
};

const Sidebar = ({ isOpenDrawer }: Props) => {
  return (
    <Drawer
      variant="persistent"
      open={isOpenDrawer}
      sx={{
        width: isOpenDrawer ? 200 : 0,
        flexShrink: 0,
      }}
    >
      <List
        sx={{ width: 200, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <Box height={"65px"} />
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
        {sidebarItems.map((item, index) => (
          <SideBarListItem
            key={index}
            label={item.label}
            icon={item.icon}
            childrenItems={item.children}
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
