import { NavLink, useLocation } from "react-router-dom";

import AuthButton from "../AuthButton/AuthButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import clsx from "clsx";
import css from "./MobileMenuContent.module.css";

const AppMobileMenuContent = ({ onMenuClick }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const classItem = ({ isActive }) => {
    return clsx(css.item, isActive && css.active, isHomePage && css.home);
  };
  return (
    <div className={css.mobileContent}>
      <nav className={css.nav}>
        <NavLink className={classItem} to="/news" onClick={onMenuClick}>
          News
        </NavLink>
        <NavLink className={classItem} to="/find" onClick={onMenuClick}>
          Find pet
        </NavLink>

        <NavLink className={classItem} to="/friends" onClick={onMenuClick}>
          Our friends
        </NavLink>
      </nav>
      <div className={css.authPart}>
        <AuthButton
          width="100%"
          background={!isHomePage ? "transparent" : "primary"}
          handleClick={onMenuClick}
        />
        <RegistrationButton width="100%" handleClick={onMenuClick} />
      </div>
    </div>
  );
};

export default AppMobileMenuContent;
