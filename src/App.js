import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonRoutes from "./routes/common";
import UserRoutes from "./routes/user";
import AdminRoutes from "./routes/admin";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./features/userSlice";
import UserGuard from "./routeGuard/userguard";
import PublicRoute from "./routeGuard/publicroute";
import AdminGuard from "./routeGuard/AdminGuard";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const credential = localStorage.getItem("users");
    if (credential) {
      dispatch(setUser(JSON.parse(credential)));
    }
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/*" element={<CommonRoutes />}></Route>
          </Route>
          <Route element={<UserGuard />}>
            <Route path="/user/*" element={<UserRoutes />}></Route>
          </Route>
          <Route element={<AdminGuard />}>
            <Route path="/admin/*" element={<AdminRoutes />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
