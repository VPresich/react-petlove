import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  if (!isLoggedIn) return null;

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <div className={css.container}>
      <button className={css.btn} onClick={handleClick}>
        <svg className={clsx(css.icon)} aria-label="User icon">
          <use href={`${iconsPath}#${"icon-user"}`} />
        </svg>
      </button>
      <p className={clsx(css.userName, isHomePage && css.home)}>{userName}</p>
    </div>
  );
};

export default UserMenu;
