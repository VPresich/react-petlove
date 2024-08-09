import clsx from "clsx";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./UserIcon.module.css";

const UserIcon = () => {
  return (
    <svg className={clsx(css.container)} aria-label="User icon">
      <use className={clsx(css.icon)} href={`${iconsPath}#${"icon-man"}`} />
    </svg>
  );
};

export default UserIcon;
