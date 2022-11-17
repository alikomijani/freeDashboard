import { Box, Button, TextField } from "@mui/material";
import React from "react";
import api from "api/api";
import { useNavigate } from "react-router-dom";
import useStorage from "hooks/storage";
import useTitle from "hooks/useTitle";
type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [authInfo, setAuthInfo] = useStorage<{
    refreshToken: string;
    accessToken: string;
    isLogin: boolean;
  }>("auth", {
    refreshToken: "",
    accessToken: "",
    isLogin: false,
  });
  console.log(authInfo);
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  useTitle("صفحه لاگین");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("/auth/login/", state)
      .then((res: any) => {
        setAuthInfo({
          accessToken: res.data.access,
          refreshToken: res.data.refresh,
          isLogin: true,
        });
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
