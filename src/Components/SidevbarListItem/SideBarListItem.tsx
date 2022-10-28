import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { useState } from "react";

type Props = {
  label: string;
  icon: React.ReactNode;
  childrenItems?: Array<{ label: string; icon: React.ReactNode }>;
  //   children?:{ label: string; icon: React.ReactNode }[];
};

const SideBarListItem = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((old) => !old);
  };
  if (props.childrenItems)
    return (
      <>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.childrenItems.map((item, index) => (
              <ListItemButton key={index} sx={{ pl: 4 }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </>
    );
  else
    return (
      <ListItemButton>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.label} />
      </ListItemButton>
    );
};

export default SideBarListItem;
