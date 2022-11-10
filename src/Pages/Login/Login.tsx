import { Box, Button, TextField } from "@mui/material";
import React from "react";
import api from "api/api";
import { useNavigate } from "react-router-dom";
import Storage from "service/Storage";
type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const st = Storage();
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("/auth/login/", state)
      .then((res: any) => {
        st.setLogin(res.data.refresh, res.data.access);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Box padding={25}>
      <form onSubmit={handleSubmit}>
        <Box margin={2}>
          <TextField
            onChange={(e) => setState({ ...state, email: e.target.value })}
            value={state.email}
            label="email"
            type={"email"}
            fullWidth
          />
        </Box>
        <Box margin={2}>
          <TextField
            onChange={(e) => setState({ ...state, password: e.target.value })}
            value={state.password}
            type={"password"}
            label="password"
            fullWidth
          />
        </Box>
        <Box margin={2}>
          <Button variant="contained" type="submit" fullWidth>
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
