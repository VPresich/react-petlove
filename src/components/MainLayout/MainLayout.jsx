import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import {
  errNotify,
  // successNotify,
} from "../../auxiliary/notification/notification";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";
import { resetRefreshState } from "../../redux/auth/slice";
import {
  getCategories,
  getSex,
  getSpecies,
} from "../../redux/notices/operations";
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
      .then(() => {
        // console.log("Refresh User", data);
        // successNotify("Success refresh User");
      })
      .catch(() => {})
      .finally(() => {
        dispatch(resetRefreshState());
      });

    dispatch(getCategories())
      .unwrap()
      .then(() => {
        // successNotify("Success get Categories");
      })
      .catch(() => {
        errNotify("error get Categories");
      });

    dispatch(getSpecies())
      .unwrap()
      .then(() => {
        // successNotify("Success get Species");
      })
      .catch(() => {
        errNotify("Error get Species");
      });

    dispatch(getSex())
      .unwrap()
      .then(() => {
        // successNotify("Success get Sex");
      })
      .catch(() => {
        errNotify("Error get Sex");
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
