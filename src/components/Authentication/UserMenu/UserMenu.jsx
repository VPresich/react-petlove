import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import {
  selectIsLoggedIn,
  selectUserName,
} from "../../../redux/auth/selectors";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);

  if (!isLoggedIn) return null;

  const handleClick = () => {};

  return (
    <div className={css.container}>
      <button className={css.userBtn} onClick={handleClick}>
        <svg className={clsx(css.iconContainer)} aria-label="User icon">
          <use className={clsx(css.icon)} href={`${iconsPath}#${"icon-man"}`} />
        </svg>
      </button>
      <p className={clsx(css.userName, isHomePage && css.home)}>{userName}</p>
    </div>
  );
};

export default UserMenu;
