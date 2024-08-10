import clsx from "clsx";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./UserIcon.module.css";

const UserIcon = ({ size = "large", iconId = "icon-user" }) => {
  return (
    <div className={clsx(css.container, css[size])}>
      <svg className={css.icon} aria-label="Default icon">
        <use href={`${iconsPath}#${iconId}`} />
      </svg>
    </div>
  );
};

export default UserIcon;
