import Grid from "@mui/material/Grid";
import api from "api/api";

import React, { useEffect, useState } from "react";
type Props = {};

const Dashboard = (props: Props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api
      .get("/posts")
      .then((res: any) => {
        setPosts(res.data.posts);
      })
      .catch((e) => {
        alert(e.message);
      });
  }, []);
  return (
    <Grid container spacing={2}>
      {posts.map((post: { id: number; title: string; body: string }) => (
        <Grid key={post.id} item xs={12}>
          {post.title}
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
