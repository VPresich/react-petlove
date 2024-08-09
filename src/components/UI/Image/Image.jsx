import clsx from "clsx";
import css from "./Image.module.css";

const Image = ({ imgUrl, size = "large", category = "" }) => {
  return (
    <div className={clsx(css.container, css[size])}>
      <img className={css.img} src={imgUrl} alt="Photo" />
      {category && (
        <span span className={css.category}>
          {category}
        </span>
      )}
    </div>
  );
};
export default Image;
