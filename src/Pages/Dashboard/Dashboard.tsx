import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import UserProfile from "Components/UserProfile/UserProfile";
import Paper from "@mui/material/Paper";

import React from "react";
import Box from "@mui/material/Box";
type Props = {};

const Dashboard = (props: Props) => {
  const [userID, setUserID] = React.useState(1);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => setUserID(1)}
                >
                  1
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => setUserID(2)}
                >
                  2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => setUserID(3)}
                >
                  3
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <UserProfile userId={userID} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
