import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import { logOut } from "../../../redux/auth/operations";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import css from "./AuthButton.module.css";

export default function AuthButton({ children, handleClick }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isUnVisible = isLoggedIn && isHomePage;

  const handleButton = () => {
    if (isLoggedIn) {
      dispatch(logOut());
      handleClick && handleClick();
    } else {
      navigate("/login");
    }
  };

  return (
    <button
      onClick={handleButton}
      className={clsx(
        css.btn,
        isHomePage && css.home,
        isUnVisible && css.unvisible
      )}
    >
      {children}
    </button>
  );
}
