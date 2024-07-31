import { useSelector } from "react-redux";
import clsx from "clsx";
import { selectTheme } from "../../redux/auth/selectors";
import iconsPath from "../../assets/img/icons.svg";
import formatNumber from "../../auxiliary/formatNumber";
import css from "./Reviewers.module.css";

export default function Reviewers({ reviews = [] }) {
  const theme = useSelector(selectTheme);
  return (
    <ul className={css.container}>
      {reviews.map(({ reviewer, rating, comment }, index) => (
        <li className={css.elem} key={index}>
          <div className={css.title}>
            <div className={clsx(css.letter, css[theme])}>
              {`${reviewer.charAt(0).toUpperCase()}`}
            </div>

            <div className={css.nameContainer}>
              <p className={css.name}>{reviewer}</p>
              <div className={css.ratingWrapper}>
                <svg className={css.iconContainer} aria-label="star icon">
                  <use
                    className={css.iconStar}
                    href={`${iconsPath}#icon-star`}
                  />
                </svg>
                <span className={css.rating}>{formatNumber(rating)}</span>
              </div>
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
}
