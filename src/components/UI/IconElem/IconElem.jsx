import clsx from "clsx";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./IconElem.module.css";

const IconElem = ({
  iconId = "icon-user",
  altText = "default user",
  containerClass = null,
  iconClass = null,
}) => {
  return (
    <div className={clsx(css.container, containerClass && containerClass)}>
      <svg
        className={clsx(css.icon, iconClass && iconClass)}
        aria-label={`Icon of ${altText}`}
      >
        <use href={`${iconsPath}#${iconId}`} />
      </svg>
    </div>
  );
};

export default IconElem;
