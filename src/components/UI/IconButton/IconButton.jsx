import { useSelector } from "react-redux";
import { selectTheme } from "../../../redux/auth/selectors";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./IconButton.module.css";
import clsx from "clsx";

const IconButton = ({ children, iconId, onClick, btnAuxStyles, ...props }) => {
  const theme = useSelector(selectTheme);
  return (
    <button
      className={clsx(css.btn, css[theme], btnAuxStyles && btnAuxStyles)}
      onClick={onClick}
      {...props}
    >
      {children}
      {iconId && (
        <span className={css.iconContainer}>
          <svg className={clsx(css.icon)} aria-label={`Icons ${iconId}`}>
            <use href={`${iconsPath}#${iconId}`} />
          </svg>
        </span>
      )}
    </button>
  );
};

export default IconButton;
