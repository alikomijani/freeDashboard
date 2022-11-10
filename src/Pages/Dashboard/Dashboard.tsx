import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import api from "api/api";

interface UserInfo {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
}
type Props = {};

const Dashboard = (props: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
  });
  useEffect(() => {
    api.get("auth/user/info/").then((res) => {
      setUserInfo(res.data);
    });
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card variant="elevation">
          <CardContent>
            <Typography>first Name :{userInfo.first_name}</Typography>
            <Typography> last Name :{userInfo.last_name}</Typography>
            <Typography>email :{userInfo.email}</Typography>
            <Typography>company :{userInfo.company}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
