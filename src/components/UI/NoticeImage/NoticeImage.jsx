import clsx from "clsx";
import css from "./NoticeImage.module.css";

const NoticeImage = ({ imgUrl, altText, auxStyles }) => {
  return (
    <div className={clsx(css.container, auxStyles ? auxStyles : css.main)}>
      <img className={css.img} src={imgUrl} alt={altText} />
    </div>
  );
};

export default NoticeImage;
