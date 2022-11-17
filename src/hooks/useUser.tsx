import api from "api/api";
import { useEffect, useState } from "react";

function useUser(): {
  user?: {
    first_name: string;
    last_name: string;
    email: string;
    company: string;
  };
  error: any;
  loading: boolean;
} {
  const [user, setUser] = useState<{
    first_name: string;
    last_name: string;
    email: string;
    company: string;
  }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/auth/user/info/")
      .then((res) => setUser(res.data))
      .catch((e) => {
        setError(e.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { user, loading, error };
}

export default useUser;
