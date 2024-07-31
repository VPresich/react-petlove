import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import SplashScreen from "./SplashScreen/SplashScreen";

const PetHomePage = lazy(() => import("../pages/PetHomePage/PetHomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage/NewsPage"));
const FindPetPage = lazy(() => import("../pages/FindPetPage/FindPetPage"));
const OurFriendsPage = lazy(() =>
  import("../pages/OurFriendsPage/OurFriendsPage")
);
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage/ProfilePage"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<SplashScreen />} />
        <Route path="home" element={<PetHomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="find" element={<FindPetPage />} />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
