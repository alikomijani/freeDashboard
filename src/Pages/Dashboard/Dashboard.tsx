import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import api from "api/api";
import useStorage from "hooks/storage";
import useUser from "hooks/useUser";
import useTitle from "hooks/useTitle";
interface UserInfo {
  first_name: string;
  last_name: string;
  email: string;
  company: string;
}
type Props = {};
const Dashboard = (props: Props) => {
  const [userInfo, setUserInfo] = useStorage<UserInfo>("user", {
    first_name: "",
    company: "",
    last_name: "",
    email: "",
  });
  const [authInfo, setAuthInfo] = useStorage<{
    token: string;
    isLogin: boolean;
  }>("auth", {
    token: "",
    isLogin: false,
  });
  const { user, error, loading } = useUser();
  console.log(user, error, loading);
  useTitle("Dashboard");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card variant="elevation">
          <CardContent>
            <Button
              onClick={() => {
                setUserInfo({
                  first_name: "Ali",
                  last_name: "Komijani",
                  email: "akpa125@gmail.com",
                  company: "daneshkar",
                });
              }}
            >
              Click
            </Button>
            {user ? (
              <>
                <Typography>first Name :{user.first_name}</Typography>
                <Typography> last Name :{user.last_name}</Typography>
                <Typography>email :{user.email}</Typography>
                <Typography>company :{user.company}</Typography>
              </>
            ) : (
              "loading"
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
