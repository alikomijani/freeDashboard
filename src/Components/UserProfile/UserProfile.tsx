import React, { useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { getUserByID, UserType } from "api/user.api";
import { Typography } from "@mui/material";
import Hover from "Components/Hover/Hover";
import Tooltip from "Components/Tooltip/Tooltip";

type Props = {
  userId: number;
  className?: string;
};

const UserProfile = ({ userId }: Props) => {
  const [user, setUser] = useState<UserType | null>(null);
  //   const userID2 = useMemo(() => userId * 2, [userId]);
  const userID2 = userId * 2; // better
  const sayHello = useCallback(() => {
    if (user) {
      alert(user.firstName);
    }
  }, [user]);

  useEffect(() => {
    setUser(null);
    getUserByID(userId).then((data) => {
      setUser(data);
    });
    // setUserId2(userId * 2); // wrong
  }, [userId]);
  return (
    <Card>
      <CardHeader title="User Profile" />
      <CardContent>
        <Typography>{userId}</Typography>
        <Hover>
          <Hover.Button>
            <Typography variant="body1">{userID2} hover</Typography>
          </Hover.Button>
          <Hover.Menu>
            <Tooltip title={"this is a tooltip"} />
          </Hover.Menu>
        </Hover>
        <Typography onClick={sayHello}>{`username: ${
          user?.username ?? "..loading"
        }`}</Typography>
        <Typography>{`first name: ${
          user?.firstName ?? "..loading"
        }`}</Typography>
        <Typography>{`last name: ${user?.lastName ?? "..loading"}`}</Typography>
        <Typography>{`email: ${user?.email ?? "..loading"}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
