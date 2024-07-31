import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import AuthButton from "../AuthButton/AuthButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import clsx from "clsx";
import css from "./MobileMenuContent.module.css";

const AppMobileMenuContent = ({ onMenuClick }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const classItem = ({ isActive }) => {
    return clsx(css.item, isActive && css.active);
  };
  return (
    <div className={css.mobileContent}>
      <nav className={css.nav}>
        <NavLink className={classItem} to="/" onClick={onMenuClick}>
          News
        </NavLink>
        <NavLink className={classItem} to="/nannies" onClick={onMenuClick}>
          Find pet
        </NavLink>
        {isLoggedIn && (
          <NavLink className={classItem} to="/favorites" onClick={onMenuClick}>
            Our friends
          </NavLink>
        )}
      </nav>
      <div className={css.authPart}>
        {isLoggedIn ? (
          <>
            <AuthButton handleClick={onMenuClick}>Logout</AuthButton>
          </>
        ) : (
          <>
            <AuthButton handleClick={onMenuClick}>Log In</AuthButton>
            <RegistrationButton handleClick={onMenuClick} />
          </>
        )}
      </div>
    </div>
  );
};

export default AppMobileMenuContent;
