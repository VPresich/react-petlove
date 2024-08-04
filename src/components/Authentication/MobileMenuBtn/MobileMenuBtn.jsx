import { useState } from "react";
import { useLocation } from "react-router-dom";
import iconsPath from "../../../assets/img/icons.svg";
import MobileMenuContent from "../MobileMenuContent/MobileMenuContent";
import clsx from "clsx";
import css from "./MobileMenuBtn.module.css";

const AppMobileMenuBtn = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={css.burgerBtn} onClick={handleClick}>
        <svg
          className={clsx(css.container, isHomePage && css.home)}
          aria-label="burger menu button"
        >
          <use
            className={clsx(css.icon, isHomePage && css.home)}
            href={`${iconsPath}#icon-burger`}
          />
        </svg>
      </button>
      <div
        className={clsx(css.mobileMenu, isHomePage && css.home, {
          [css.open]: isOpen,
        })}
      >
        <button className={css.closeBtn} onClick={handleClick}>
          <svg
            className={clsx(css.closeIcon, isHomePage && css.home)}
            aria-label="close menu button"
          >
            <use href={`${iconsPath}#icon-x-close`} />
          </svg>
        </button>
        <MobileMenuContent onMenuClick={handleClick} />
      </div>
    </>
  );
};

export default AppMobileMenuBtn;
