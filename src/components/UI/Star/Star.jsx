import clsx from "clsx";
import iconsPath from "../../../assets/img/icons.svg";
import css from "./Star.module.css";

export default function Star({ isFilled }) {
  return (
    <div className={css.star}>
      <svg
        className={clsx(
          css.icon,
          isFilled && css.filled,
          !isFilled && css.notfilled
        )}
        aria-label="star icon"
      >
        <use href={`${iconsPath}#icon-star`} />
      </svg>
    </div>
  );
}
