import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Loader from "../../components/UI/Loader/Loader";

import css from "./MainLayout.module.css";

const MainLayout = () => {
  const location = useLocation();
  const isMain = location.pathname === "/";
  return (
    <div className={css.container}>
      {!isMain && <AppBar />}
      {/* <Loader /> */}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
