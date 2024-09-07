import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import {
  selectIsLoggedIn,
  selectUserName,
  selectUserAvatar,
} from "../../../redux/auth/selectors";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);
  const navigate = useNavigate();

  if (!isLoggedIn) return null;

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div className={css.container}>
      <button className={css.btn} onClick={handleClick}>
        {userAvatar ? (
          <img
            src={userAvatar}
            alt="User avatar"
            className={clsx(css.avatar, isHomePage && css.homeAvatar)}
          />
        ) : (
          <svg className={clsx(css.icon)} aria-label="User icon">
            <use href={`${iconsPath}#${"icon-user"}`} />
          </svg>
        )}
      </button>
      <p
        className={clsx(css.userName, isHomePage && css.home)}
        onClick={handleClick}
      >
        {userName}
      </p>
    </div>
  );
};

export default UserMenu;
