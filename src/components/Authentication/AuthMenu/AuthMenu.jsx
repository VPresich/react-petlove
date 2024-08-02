import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import AuthButton from "../AuthButton/AuthButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import UserMenu from "../UserMenu/UserMenu";

import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <div className={css.signMenu}>
        <AuthButton> {isLoggedIn ? "Logout" : "Log In"}</AuthButton>
        {!isLoggedIn && <RegistrationButton />}
      </div>
      {isLoggedIn && <UserMenu />}
    </div>
  );
};

export default AuthMenu;
