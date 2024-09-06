import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import SplashScreen from "./SplashScreen/SplashScreen";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const PetHomePage = lazy(() => import("../pages/PetHomePage/PetHomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage/NewsPage"));
const FindPetPage = lazy(() => import("../pages/FindPetPage/FindPetPage"));
const OurFriendsPage = lazy(() =>
  import("../pages/OurFriendsPage/OurFriendsPage")
);
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));
const AddPetPage = lazy(() => import("../pages/AddPetPage/AddPetPage"));
const Page404 = lazy(() => import("../pages/Page404/Page404"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SplashScreen />} />
        <Route path="home" element={<PetHomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="find" element={<FindPetPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/profile" component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/profile"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo="/home" component={<ProfilePage />} />
          }
        />
        <Route
          path="add-pet"
          element={
            <PrivateRoute redirectTo="/home" component={<AddPetPage />} />
          }
        />
        <Route path="page404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/page404" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
