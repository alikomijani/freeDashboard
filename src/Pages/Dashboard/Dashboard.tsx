import { Box, Button, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import api from "api/api";
import { useTheme } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import SuccessButton from "Components/SuccessButton/SuccessButton";
import CustomFrom from "Components/CustomForm/CustomFrom";
type Props = {};

const Dashboard = (props: Props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api
      .get("/posts")
      .then((res: any) => {
        setPosts(res.data.posts);
      })
      .catch((e) => {});
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={4}>
        <Card variant="elevation">
          <CardContent></CardContent>
        </Card>
      </Grid>

      {posts.map((post: { id: number; title: string; body: string }) => (
        <Grid key={post.id} item xs={12}>
          {post.title}
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
