import axios from "axios";
import Storage from "service/Storage";
const st = Storage();
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

api.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${st.accessToken}`,
    };
    return config;
  },
  function (error) {
    // Do something with request error
    throw error;
  }
);

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const res = error.response;
    if (res.status === 401 && st.isLogin) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const res = await api.post("/auth/refresh/", {
            refresh: st.refreshToken,
          });
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${res.data.access}`;
          st.setAccessToken(res.data.access);
          return api(originalRequest);
        } catch (e) {
          console.log({ error: e });
          st.setLogout();
          throw error;
        }
      } else {
        st.setLogout();
      }
    }
    throw error;
  }
);
export default api;
