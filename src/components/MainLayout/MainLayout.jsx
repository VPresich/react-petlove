import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import { errNotify } from "../../auxiliary/notification/notification";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { resetRefreshState } from "../../redux/auth/slice";
import {
  getCategories,
  getSex,
  getSpecies,
} from "../../redux/notices/operations";
import { getAllCities } from "../../redux/cities/operations";
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
      .catch(() => {})
      .finally(() => {
        dispatch(resetRefreshState());
      });

    dispatch(getCategories())
      .unwrap()
      .catch(() => {
        errNotify("error get Categories");
      });

    dispatch(getSpecies())
      .unwrap()
      .catch(() => {
        errNotify("Error get Species");
      });

    dispatch(getSex())
      .unwrap()
      .catch(() => {
        errNotify("Error get Sex");
      });

    dispatch(getAllCities())
      .unwrap()
      .catch(() => {
        errNotify("Error get cities");
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
