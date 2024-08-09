import clsx from "clsx";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./UserIcon.module.css";

const UserIcon = (size = "large") => {
  return (
    <div className={clsx(css.container, css[size])}>
      <svg className={css.icon} aria-label="User icon">
        <use href={`${iconsPath}#${"icon-user"}`} />
      </svg>
    </div>
  );
};

export default UserIcon;
