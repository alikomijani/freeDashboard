import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Card>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>hello</CardContent>
    </Card>
  );
};

export default Dashboard;
