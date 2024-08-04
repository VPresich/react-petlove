import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import AuthButton from "../AuthButton/AuthButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import UserMenu from "../UserMenu/UserMenu";

import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <div className={css.signMenu}>
        <AuthButton
          widthBtn={isLoggedIn ? "136px" : "120px"}
          background={isHomePage ? "transparent" : "primary"}
        />
        {!isLoggedIn && <RegistrationButton widthBtn="149px" />}
      </div>
      {isLoggedIn && <UserMenu />}
    </div>
  );
};

export default AuthMenu;
