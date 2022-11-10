import React from "react";
import { Navigate } from "react-router-dom";
import Storage from "service/Storage";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const storage = Storage();

  if (!storage.isLogin) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
};

export default AuthProvider;
