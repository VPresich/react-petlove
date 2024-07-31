import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import iconsPath from "../../assets/img/icons.svg";
import css from "./Logo.module.css";

const Logo = () => {
  const location = useLocation();
  const isMain = location.pathname === "/";
  const isHomePage = location.pathname === "/home";

  return (
    <Link to="/home" className={clsx(css.link, isMain && css.main)}>
      <span
        className={clsx(
          css.logoText,
          isMain && css.main,
          isHomePage && css.home
        )}
      >
        petl
      </span>

      <svg
        className={clsx(css.iconContainer, isMain && css.main)}
        aria-label="orange heart icon"
      >
        <use
          className={clsx(css.icon, isHomePage && css.home)}
          href={`${iconsPath}#icon-heart`}
        />
      </svg>

      <span
        className={clsx(
          css.logoText,
          isMain && css.main,
          isHomePage && css.home
        )}
      >
        ove
      </span>
    </Link>
  );
};

export default Logo;
