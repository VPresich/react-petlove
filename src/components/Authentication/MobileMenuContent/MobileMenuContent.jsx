import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthButton from "../AuthButton/AuthButton";
import RegistrationButton from "../RegistrationButton/RegistrationButton";
import clsx from "clsx";
import css from "./MobileMenuContent.module.css";

const AppMobileMenuContent = ({ onMenuClick }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          background={!isHomePage ? "transparent" : "primary"}
          handleClick={onMenuClick}
          widthBtn={viewportWidth > 767 ? "119px" : "100%"}
        />
        <RegistrationButton
          handleClick={onMenuClick}
          widthBtn={viewportWidth > 767 ? "149px" : "100%"}
        />
      </div>
    </div>
  );
};

export default AppMobileMenuContent;
