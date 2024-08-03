import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { resetRefreshState } from "../../redux/auth/slice";
import AppBar from "../AppBar/AppBar";
import Loader from "../../components/UI/Loader/Loader";

import css from "./MainLayout.module.css";

const MainLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isMain = location.pathname === "/";
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then((data) => {
        console.log("REFRESH", data);
      })
      .catch(() => {})
      .finally(() => {
        dispatch(resetRefreshState());
      });
  }, [dispatch]);

  return (
    <div className={css.container}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          {!isMain && <AppBar />}

          <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>

          <Toaster position="top-right" reverseOrder={false} />
        </>
      )}
    </div>
  );
};

export default MainLayout;
