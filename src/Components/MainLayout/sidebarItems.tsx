import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";

const sidebarItems = [
  {
    label: "Sent mail",
    icon: <SendIcon />,
  },
  {
    label: "Drafts",
    icon: <DraftsIcon />,
  },
  {
    label: "Inbox",
    icon: <InboxIcon />,
    children: [
      {
        label: "Starred",
        icon: <StarBorder />,
      },
    ],
  },
];
export default sidebarItems;
